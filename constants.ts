import { ColorType, PersonalityData } from './types';

export const PERSONALITY_DATA: PersonalityData[] = [
  {
    type: ColorType.RED,
    tagline: "Driven by POWER & RESULTS",
    description: "A natural leader who cuts through the noise and gets things done. Just don't expect them to wait patiently while you explain the backstory.",
    themeColor: '#f43f5e', // rose-500
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/50',
    shadowColor: 'shadow-rose-500/20',
    stats: [
      { label: 'Drive', value: 10 },
      { label: 'Decisiveness', value: 9 },
      { label: 'Results Focus', value: 10 },
      { label: 'Patience', value: 2 },
    ],
    communicationTips: [
      'Be Direct',
      'Be Decisive',
      'Use Frameworks',
      'Be Efficient'
    ],
    impactOnOthers: [
      { color: ColorType.GREEN, description: "Feels you're pushy & overwhelming." },
      { color: ColorType.YELLOW, description: "Sees you as too serious & blunt." },
      { color: ColorType.BLUE, description: "Thinks you're reckless with details." }
    ]
  },
  {
    type: ColorType.YELLOW,
    tagline: "Driven by FUN & CONNECTION",
    description: "Bursting with ideas, energy, and charm. Will keep you laughing... but might forget what the original point was halfway through.",
    themeColor: '#fbbf24', // amber-400
    textColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/50',
    shadowColor: 'shadow-amber-500/20',
    stats: [
      { label: 'Energy', value: 10 },
      { label: 'Optimism', value: 10 },
      { label: 'Creativity', value: 9 },
      { label: 'Focus', value: 3 },
    ],
    communicationTips: [
      'Be Enthusiastic',
      'Be Positive',
      'Be Engaging'
    ],
    impactOnOthers: [
      { color: ColorType.RED, description: "Finds you unfocused & impatient." },
      { color: ColorType.GREEN, description: "Feels your energy is chaotic." },
      { color: ColorType.BLUE, description: "Sees you as superficial." }
    ]
  },
  {
    type: ColorType.GREEN,
    tagline: "Driven by PEACE & STABILITY",
    description: "Calm, steady, and the glue that holds the group together. Loves harmony, hates drama, and would rather everyone just get along.",
    themeColor: '#34d399', // emerald-400
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/50',
    shadowColor: 'shadow-emerald-500/20',
    stats: [
      { label: 'Patience', value: 10 },
      { label: 'Harmony', value: 10 },
      { label: 'Reliability', value: 9 },
      { label: 'Decisions', value: 2 },
    ],
    communicationTips: [
      'Be Calm',
      'Be Patient',
      'Be Supportive'
    ],
    impactOnOthers: [
      { color: ColorType.RED, description: "Thinks you're indecisive." },
      { color: ColorType.YELLOW, description: "Finds you resistant to fun." },
      { color: ColorType.BLUE, description: "Frustrated by non-decisions." }
    ]
  },
  {
    type: ColorType.BLUE,
    tagline: "Driven by LOGIC & STRUCTURE",
    description: "The master of precision and planning. Will spot every typo, fix every detail, and definitely read the instruction manual cover to cover.",
    themeColor: '#38bdf8', // sky-400
    textColor: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/50',
    shadowColor: 'shadow-sky-500/20',
    stats: [
      { label: 'Accuracy', value: 10 },
      { label: 'Detail Focus', value: 10 },
      { label: 'Planning', value: 9 },
      { label: 'Risk Taking', value: 2 },
    ],
    communicationTips: [
      'Be Precise',
      'Be Structured',
      'Be Factual'
    ],
    impactOnOthers: [
      { color: ColorType.RED, description: "Sees you as too slow." },
      { color: ColorType.YELLOW, description: "Feels judged by criticism." },
      { color: ColorType.GREEN, description: "Thinks you're nitpicky." }
    ]
  }
];