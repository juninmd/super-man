from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # Check Hero
        expect(page.get_by_role("heading", name="Protocolo de Alta Performance")).to_be_visible()
        expect(page.get_by_text("Mentor Mqsculus")).to_be_visible()

        # Check Guide - Click to open if closed, or just verify if open.
        # It defaults to 'mind' open, so 'Estoicismo Aplicado' should be visible.
        # But maybe we need to wait/scroll.

        # Scroll to guide
        page.get_by_text("O Código").scroll_into_view_if_needed()

        # Try clicking 'Mentalidade de Ferro' to toggle it ensuring it's open or triggering it.
        # Since logic is: isOpen = openSection === section.id. Initial is 'mind'.
        # So 'Estoicismo Aplicado' should be there.

        # Debug: take screenshot before failing
        page.screenshot(path="verification/debug.png", full_page=True)

        expect(page.get_by_text("Estoicismo Aplicado")).to_be_visible()

        page.screenshot(path="verification/screenshot.png", full_page=True)
        browser.close()

if __name__ == "__main__":
    run()
