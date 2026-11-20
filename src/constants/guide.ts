import { Dumbbell, Brain, Target, Trophy, Users, Shield, Activity } from 'lucide-react';

export const SECTIONS = [
  {
    id: 'mind',
    title: 'Stoic Mindset',
    icon: Brain,
    content: [
      {
        subtitle: 'Dichotomy of Control',
        text: 'You do not control what happens, only how you react. Traffic, the economy, others\' opinions - all noise. Focus entirely on what is in your hands: your effort, your integrity, your discipline.'
      },
      {
        subtitle: 'Eradicate Excuses',
        text: 'Hesitation breeds weakness. When a task must be done, do not negotiate with yourself. Execute immediately. Action over deliberation. Discipline is your only path to true strength.'
      },
      {
        subtitle: 'Radical Responsibility',
        text: 'No one is coming to save you. Stop blaming external forces. Take extreme ownership of your failures and your successes. Your life is your fault.'
      },
      {
        subtitle: 'Amor Fati',
        text: 'Love your fate. Do not merely endure adversity, embrace it. Every obstacle, every pain, is an opportunity to practice virtue and build resilience.'
      },
      {
        subtitle: 'Premeditatio Malorum',
        text: 'Prepare for the worst. Visualize losing what you love, facing failure, and enduring pain. By rehearsing hardship, you strip it of its power to paralyze you when it arrives.'
      }
    ]
  },
  {
    id: 'body',
    title: 'Physical Fortitude',
    icon: Dumbbell,
    content: [
      {
        subtitle: 'Voluntary Discomfort',
        text: 'Take cold showers. Fast regularly. Embrace the strenuous. Train your mind to endure hardship daily, so that when true tragedy strikes, you remain unshaken.'
      },
      {
        subtitle: 'Forge the Vessel',
        text: 'A weak body betrays a weak will. Lift heavy, run far, train consistently. Physical strength is the foundation of mental durability.'
      },
      {
        subtitle: 'Fuel for Performance',
        text: 'Eat for sustenance and strength, not for pleasure. Eliminate processed garbage. Master your appetites before they master you.'
      },
      {
        subtitle: 'Restorative Discipline',
        text: 'Sleep is not weakness; it is a necessity for recovery. Maintain a strict schedule. Rebuild the body to fight the next day.'
      }
    ]
  },
  {
    id: 'discipline',
    title: 'Relentless Routine',
    icon: Target,
    content: [
      {
        subtitle: 'Master Your Time',
        text: 'Time is your only non-renewable resource. Guard it fiercely. Ruthlessly eliminate distractions and direct all energy to your core mission.'
      },
      {
        subtitle: 'Delayed Gratification',
        text: 'Reject the weak pull of cheap dopamine. Sacrifice the comfortable indulgence of today for the unshakeable strength of tomorrow. Absolute freedom requires absolute self-denial.'
      },
      {
        subtitle: 'System Over Motivation',
        text: 'Motivation is an illusion for the weak. Discipline is permanent. Forge ironclad systems that compel you to execute relentlessly, especially when your mind screams to quit.'
      }
    ]
  },
  {
    id: 'spirit',
    title: 'Virtue & Duty',
    icon: Trophy,
    content: [
      {
        subtitle: 'Unbreakable Word',
        text: 'Your integrity is your most valuable possession. If you commit, follow through. Do not compromise your character for convenience.'
      },
      {
        subtitle: 'Fulfill Your Role',
        text: 'Understand your duty to yourself, your family, and your community. Execute that duty regardless of how heavy the burden feels.'
      }
    ]
  },
  {
    id: 'tribe',
    title: 'Inner Citadel',
    icon: Users,
    content: [
      {
        subtitle: 'Guard Your Circle',
        text: 'Surround yourself only with those who demand more of you. Cut ties with those who drag you down into complacency and vice.'
      },
      {
        subtitle: 'Self-Sufficiency',
        text: 'Rely on no one for your peace of mind. Build an inner fortress that cannot be breached by the actions or words of others.'
      },
      {
        subtitle: 'Lead by Example',
        text: 'Do not preach philosophy. Embody it. Let your actions, your discipline, and your resilience be the only argument you ever need.'
      }
    ]
  },
  {
    id: 'resilience',
    title: 'Iron Resilience',
    icon: Shield,
    content: [
      {
        subtitle: 'Embrace the Struggle',
        text: 'Adversity is not an anomaly; it is the crucible. When the burden feels unbearable, smile. You are being tested. Lean into the pain to build unshakeable fortitude.'
      },
      {
        subtitle: 'Antifragility',
        text: 'Surviving is the baseline. Do not just withstand the storm—absorb its energy. Let every failure, betrayal, and physical exhaustion become the raw fuel for your undeniable ascent.'
      }
    ]
  },
  {
    id: 'protocols',
    title: 'Action Protocols',
    icon: Activity,
    content: [
      {
        subtitle: 'The Morning Forge',
        text: 'Do not touch your phone for the first 60 minutes. Hydrate immediately. Spend 5 minutes visualizing your day and the obstacles you will face. Complete your hardest, most dreaded task immediately. Win the morning, win the war.'
      },
      {
        subtitle: 'Stoic Evening Audit',
        text: 'End your day with a ruthless self-examination. Write down: What did I do wrong today? What did I do right? What duty did I neglect? Correct the trajectory daily.'
      },
      {
        subtitle: 'The 24-Hour Rule',
        text: 'When you feel a strong negative emotion—anger, frustration, despair—do not react. Impose a strict 24-hour waiting period before responding. Time neutralizes emotion and allows reason to dictate your action.'
      },
      {
        subtitle: 'Dopamine Fasting',
        text: 'Schedule one day a week with zero cheap dopamine. No social media, no entertainment, no junk food, no distractions. Reset your baseline and reclaim your ability to do deep, difficult work.'
      }
    ]
  },
  {
    id: 'resilience-forge',
    title: 'Resilience Forge',
    icon: Dumbbell,
    content: [
      {
        subtitle: 'The 5-Second Execution',
        text: 'When a hard task arises, motivation is irrelevant. Count 5-4-3-2-1 and execute immediately. Action precedes motivation. This builds ironclad discipline.'
      },
      {
        subtitle: 'Seek the Cold',
        text: 'End every shower with 2 minutes of freezing water. Force your mind to submit to your will. This voluntary discomfort builds the resilience needed for actual crises.'
      },
      {
        subtitle: 'Ruthless Elimination',
        text: 'Identify one bad habit making you weak (sugar, doomscrolling, complaining). Eliminate it immediately and absolutely. Tolerance of weakness breeds more weakness.'
      },
      {
        subtitle: 'Embrace the Pain',
        text: 'When faced with physical or mental exhaustion, lean into it. Smile at the adversity. Tell yourself: "This is the fire that forges the steel." Never quit when you are tired.'
      }
    ]
  }
];
