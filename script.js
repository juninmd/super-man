document.addEventListener('DOMContentLoaded', () => {
    const habitsList = document.getElementById('habits-list');
    const progressBar = document.getElementById('progress-bar');
    const dateDisplay = document.getElementById('date-display');
    const reminderBtn = document.getElementById('reminder-btn');
    const resetBtn = document.getElementById('reset-btn');

    const habits = [
        "Eat clean",
        "Walk more",
        "Lift weights",
        "Sleep earlier",
        "Wake up at 5 AM",
        "Fast in the morning",
        "Drink water",
        "Talk less",
        "Listen more",
        "Spend time alone",
        "Love your family",
        "Avoid negative thoughts"
    ];

    const reminders = [
        "No gym leads to stagnation.",
        "Take a timeout when needed.",
        "Sleep is crucial for recovery.",
        "You are what you eat.",
        "Limit your screentime.",
        "Find your purpose.",
        "Cut toxic bonds.",
        "Family is everything."
    ];

    // Initialize Date
    const now = new Date();
    const todayDisplay = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const todayKey = now.toISOString().split('T')[0]; // YYYY-MM-DD format for stability

    dateDisplay.textContent = todayDisplay;

    // Load State
    let habitState = JSON.parse(localStorage.getItem('habitState')) || {};
    const storedDate = localStorage.getItem('habitDate');

    // Reset if new day
    if (storedDate !== todayKey) {
        habitState = {}; // Reset habits for new day
        localStorage.setItem('habitDate', todayKey);
        localStorage.setItem('habitState', JSON.stringify(habitState));
    }

    function renderHabits() {
        habitsList.innerHTML = '';
        let completedCount = 0;

        habits.forEach((habit, index) => {
            const item = document.createElement('div');
            item.className = 'habit-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `habit-${index}`;
            checkbox.checked = habitState[index] || false;

            if (checkbox.checked) {
                item.classList.add('completed');
                completedCount++;
            }

            checkbox.addEventListener('change', () => {
                habitState[index] = checkbox.checked;
                localStorage.setItem('habitState', JSON.stringify(habitState));
                renderHabits(); // Re-render to update UI and progress
            });

            const label = document.createElement('label');
            label.htmlFor = `habit-${index}`;
            label.textContent = habit;
            label.style.cursor = 'pointer';

            // Allow clicking the whole row
            item.addEventListener('click', (e) => {
                // If the user clicked the checkbox or the label, let the native browser behavior handle it.
                // We only manually toggle if the user clicked the background area of the list item.
                if (e.target !== checkbox && e.target !== label) {
                    checkbox.checked = !checkbox.checked;
                    // Trigger change event manually because setting .checked programmatically doesn't fire it
                    const event = new Event('change');
                    checkbox.dispatchEvent(event);
                }
            });

            item.appendChild(checkbox);
            item.appendChild(label);
            habitsList.appendChild(item);
        });

        updateProgress(completedCount);
    }

    function updateProgress(count) {
        const percentage = Math.round((count / habits.length) * 100);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}%`;
    }

    reminderBtn.addEventListener('click', () => {
        const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
        alert(`REMINDER:\n\n${randomReminder}`);

        // Request notification permission if not granted
        if ("Notification" in window) {
            if (Notification.permission !== "granted" && Notification.permission !== "denied") {
                Notification.requestPermission();
            } else if (Notification.permission === "granted") {
                new Notification("2026 Life Reset", {
                    body: randomReminder,
                    icon: "https://via.placeholder.com/128" // Placeholder icon
                });
            }
        }
    });

    resetBtn.addEventListener('click', () => {
        if(confirm("Are you sure you want to reset today's progress?")) {
            habitState = {};
            localStorage.setItem('habitState', JSON.stringify(habitState));
            renderHabits();
        }
    });

    renderHabits();
});
