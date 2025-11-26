// Comprehensive collection of writing exercises for horror and creative writing practice
const writingExercises = [
  // Warmup Exercises (Quick starters)
  {
    title: "Horror Warmup",
    prompt: "Describe an ordinary object in your room, but write about it as if it's slowly becoming aware of you watching it. 200 words.",
    type: "warmup"
  },
  {
    title: "Quick Scene",
    prompt: "Write a 100-word scene where someone realizes they're not alone. Focus on the moment of realization.",
    type: "warmup"
  },
  {
    title: "First Line Sprint",
    prompt: "Start with: 'The mirror showed my reflection, but it was smiling when I wasn't.' Continue for 150 words.",
    type: "warmup"
  },
  {
    title: "Sound Description",
    prompt: "Describe a sound that makes your character's blood run cold. Make the reader hear it. 100 words.",
    type: "warmup"
  },
  {
    title: "Creepy Childhood",
    prompt: "Take a children's nursery rhyme and rewrite it as the opening to a horror story. 200 words.",
    type: "warmup"
  },

  // Character Development
  {
    title: "Character Snapshot",
    prompt: "Write a character's internal monologue as they're deciding whether to open a door they know they shouldn't. What do they hear on the other side?",
    type: "character"
  },
  {
    title: "Unreliable Narrator",
    prompt: "Write a scene from the perspective of a character who's slowly losing their grip on reality. Show, don't tell.",
    type: "character"
  },
  {
    title: "Villain's Motivation",
    prompt: "Write a scene showing your antagonist's ordinary morning routine. Make them feel human, even sympathetic.",
    type: "character"
  },
  {
    title: "Last Confession",
    prompt: "Your character knows they won't survive the night. Write their final recording/letter to someone they love.",
    type: "character"
  },
  {
    title: "Fear Response",
    prompt: "Show how your character physically responds to fear. Go beyond the obvious—explore unique gestures, thoughts, or behaviors.",
    type: "character"
  },
  {
    title: "Breaking Point",
    prompt: "Write the moment when your character's composure finally cracks. What's the last straw?",
    type: "character"
  },
  {
    title: "Protective Instinct",
    prompt: "Your character must choose between their own safety and protecting someone else. Write the decision-making process.",
    type: "character"
  },

  // Atmosphere and Craft
  {
    title: "Atmosphere Builder",
    prompt: "Describe a familiar place at an unfamiliar time. Focus on sensory details that create unease without anything overtly scary happening.",
    type: "craft"
  },
  {
    title: "Pacing Practice",
    prompt: "Write a 300-word scene that starts mundane and gradually builds to intense horror, focusing on sentence rhythm and pacing.",
    type: "craft"
  },
  {
    title: "Sensory Focus",
    prompt: "Pick one sense (not sight) and write a scene relying primarily on that sense to create dread.",
    type: "craft"
  },
  {
    title: "Weather as Character",
    prompt: "Use weather to mirror your character's emotional state and build tension. 250 words.",
    type: "craft"
  },
  {
    title: "Lighting Study",
    prompt: "Describe the same room at three different times of day. How does the lighting change the atmosphere?",
    type: "craft"
  },
  {
    title: "Confined Space",
    prompt: "Write a scene set in a progressively shrinking space. Make the reader feel claustrophobic.",
    type: "craft"
  },
  {
    title: "Silence Exercise",
    prompt: "Write a tense scene using no dialogue. Rely entirely on action, internal thought, and description.",
    type: "craft"
  },
  {
    title: "Color Palette",
    prompt: "Choose three colors and build an entire scene's atmosphere using only those colors and their variations.",
    type: "craft"
  },

  // Dialogue Exercises
  {
    title: "Dialogue Tension",
    prompt: "Write a conversation between two people where one knows a terrible secret about the other, but neither acknowledges it directly.",
    type: "dialogue"
  },
  {
    title: "Phone Call",
    prompt: "Write one side of a phone conversation where the reader can infer what's being said on the other end through reactions.",
    type: "dialogue"
  },
  {
    title: "Interrogation",
    prompt: "Write a dialogue where one character is trying to extract information while the other is hiding something crucial.",
    type: "dialogue"
  },
  {
    title: "Misunderstanding",
    prompt: "Two characters are having a conversation but are talking about completely different things. Build the tension.",
    type: "dialogue"
  },
  {
    title: "Warning Unheeded",
    prompt: "Write a scene where someone tries to warn your protagonist about danger, but the protagonist dismisses them.",
    type: "dialogue"
  },
  {
    title: "Gaslighting",
    prompt: "Write a conversation where one character is subtly manipulating another's perception of reality.",
    type: "dialogue"
  },

  // Technical Skills
  {
    title: "Opening Hook",
    prompt: "Write three different opening sentences for a horror story. Make each one establish a different type of dread.",
    type: "technique"
  },
  {
    title: "Foreshadowing",
    prompt: "Write a scene that plants three subtle hints about something terrible coming. Make them easy to miss on first read.",
    type: "technique"
  },
  {
    title: "Cliffhanger Practice",
    prompt: "Write a 200-word scene that ends on a cliffhanger. Make the reader desperate to know what happens next.",
    type: "technique"
  },
  {
    title: "Red Herring",
    prompt: "Plant a false clue that misleads both your character and reader. 300 words.",
    type: "technique"
  },
  {
    title: "Parallel Scenes",
    prompt: "Write two parallel scenes—one calm, one horrific—and interweave them paragraph by paragraph.",
    type: "technique"
  },
  {
    title: "Unreliable Description",
    prompt: "Describe a scene, then reveal one detail that recontextualizes everything the reader just imagined.",
    type: "technique"
  },
  {
    title: "Symbolism",
    prompt: "Choose an object that appears throughout your scene, having it gain new meaning each time it's mentioned.",
    type: "technique"
  },

  // Advanced Exercises
  {
    title: "Subtext Exercise",
    prompt: "Write a scene where the real horror is never stated explicitly, only implied through what characters don't say or do.",
    type: "advanced"
  },
  {
    title: "Unreliable Reality",
    prompt: "Write a scene where the reader can't tell if events are actually happening or if they're hallucinations/dreams.",
    type: "advanced"
  },
  {
    title: "Multiple POV",
    prompt: "Write the same frightening moment from three different characters' perspectives, each noticing different details.",
    type: "advanced"
  },
  {
    title: "Cosmic Horror",
    prompt: "Describe something incomprehensible that breaks your character's understanding of reality. Make it unknowable.",
    type: "advanced"
  },
  {
    title: "Body Horror",
    prompt: "Write a transformation scene focusing on physical sensations and psychological impact. 400 words.",
    type: "advanced"
  },
  {
    title: "Slow Burn",
    prompt: "Write a 500-word scene where nothing overtly scary happens, but dread steadily builds through small, wrong details.",
    type: "advanced"
  },
  {
    title: "Moral Horror",
    prompt: "Force your character to make an impossible choice where any option leads to tragedy. Explore the decision.",
    type: "advanced"
  },

  // Genre Blending
  {
    title: "Romance Meets Horror",
    prompt: "Write a romantic scene that slowly reveals something is very wrong with one of the participants.",
    type: "genre-blend"
  },
  {
    title: "Comedy Horror",
    prompt: "Write a scary scene with darkly comedic elements. Balance the tones without undercutting either.",
    type: "genre-blend"
  },
  {
    title: "Mystery Horror",
    prompt: "Plant a clue to a horrific truth hidden in plain sight within a mundane investigation scene.",
    type: "genre-blend"
  },
  {
    title: "Sci-Fi Horror",
    prompt: "Describe a futuristic technology that has horrifying unintended consequences. 300 words.",
    type: "genre-blend"
  },
  {
    title: "Historical Horror",
    prompt: "Set a horror scene in a specific historical period. Use period-accurate details to enhance the atmosphere.",
    type: "genre-blend"
  },

  // Specific Subgenres
  {
    title: "Ghost Story",
    prompt: "Write a scene where a character encounters evidence of a presence. Never show the ghost directly.",
    type: "subgenre"
  },
  {
    title: "Psychological Thriller",
    prompt: "Write a scene where your character doubts their own memories or perceptions. What triggered this doubt?",
    type: "subgenre"
  },
  {
    title: "Folk Horror",
    prompt: "Describe a small community with a disturbing tradition. An outsider is beginning to understand what it means.",
    type: "subgenre"
  },
  {
    title: "Found Footage",
    prompt: "Write a scene as if it's being recorded. Include technical details (camera shake, audio issues) that add to the fear.",
    type: "subgenre"
  },
  {
    title: "Survival Horror",
    prompt: "Your character has limited resources and is being hunted. Write their desperate attempt to survive the next hour.",
    type: "subgenre"
  },
  {
    title: "Gothic Horror",
    prompt: "Set a scene in an old mansion. Use architecture and decay to reflect psychological horror.",
    type: "subgenre"
  },

  // Settings and Environments
  {
    title: "Urban Horror",
    prompt: "Find horror in a crowded city setting. The terror is that no one notices or helps.",
    type: "setting"
  },
  {
    title: "Wilderness Isolation",
    prompt: "Your character is alone in nature. The isolation itself becomes threatening. 300 words.",
    type: "setting"
  },
  {
    title: "Domestic Horror",
    prompt: "Find horror in the most familiar room in a house. Make home feel unsafe.",
    type: "setting"
  },
  {
    title: "Hospital Setting",
    prompt: "Use a medical setting to create unease. Play with the vulnerability of being a patient.",
    type: "setting"
  },
  {
    title: "Underground",
    prompt: "Set a scene in a basement, cave, or tunnel. Use the weight of earth above to create pressure.",
    type: "setting"
  },
  {
    title: "Abandoned Place",
    prompt: "Describe an abandoned building. What was it before? What happened here? Let the space tell a story.",
    type: "setting"
  },

  // Writing Craft (General)
  {
    title: "Show Don't Tell",
    prompt: "Write 'The character was terrified' five different ways without using the word 'terror' or 'fear' or 'scared'.",
    type: "craft-general"
  },
  {
    title: "Active Voice",
    prompt: "Rewrite this in active voice: 'The sound was heard by everyone in the building.' Now write a full scene using strong, active verbs.",
    type: "craft-general"
  },
  {
    title: "Sentence Variety",
    prompt: "Write a paragraph using only short sentences. Then rewrite it mixing short and long. Compare the rhythms.",
    type: "craft-general"
  },
  {
    title: "Metaphor Practice",
    prompt: "Create five original metaphors for fear. Then use the strongest one in a 200-word scene.",
    type: "craft-general"
  },
  {
    title: "Strong Verbs",
    prompt: "Write an action scene without using any form of 'to be' verbs. Force yourself to use vivid, specific verbs.",
    type: "craft-general"
  },
  {
    title: "Editing Exercise",
    prompt: "Write 300 words. Now cut it to 200 without losing the core meaning. What did you learn?",
    type: "craft-general"
  },

  // Reader Engagement
  {
    title: "Reader Investment",
    prompt: "Give your character a small, specific detail (a habit, fear, or dream) that makes them feel real. Show it naturally.",
    type: "engagement"
  },
  {
    title: "Raise the Stakes",
    prompt: "Start with a problem. Make it worse. Make it worse again. Write how your character reacts to escalating danger.",
    type: "engagement"
  },
  {
    title: "Unexpected Twist",
    prompt: "Write a scene that seems to be going one direction, then twist it. Plant the clue to the twist early but subtly.",
    type: "engagement"
  },
  {
    title: "Emotional Punch",
    prompt: "Write a moment of genuine emotion (not just fear) in the middle of horror. Make the reader care.",
    type: "engagement"
  },

  // Flash Fiction
  {
    title: "50-Word Horror",
    prompt: "Tell a complete horror story in exactly 50 words. Every word must count.",
    type: "flash"
  },
  {
    title: "100-Word Twist",
    prompt: "Write a 100-word story with a twist ending. The twist should reframe everything that came before.",
    type: "flash"
  },
  {
    title: "Two-Sentence Horror",
    prompt: "Write a horror story in two sentences. The second sentence should recontextualize the first.",
    type: "flash"
  },
  {
    title: "Micro Fiction",
    prompt: "Tell a complete story in under 25 words. Include a character, conflict, and resolution.",
    type: "flash"
  },

  // Revision and Polish
  {
    title: "Tighten Your Prose",
    prompt: "Write a paragraph, then remove every unnecessary word. If it doesn't serve the story, cut it.",
    type: "revision"
  },
  {
    title: "Strengthen Opening",
    prompt: "Take a weak opening line and rewrite it five different ways. Which grabs attention immediately?",
    type: "revision"
  },
  {
    title: "Fix Filter Words",
    prompt: "Rewrite this removing filters: 'She felt afraid. She saw the door open. She heard footsteps.' Now write a full scene without filters.",
    type: "revision"
  },
  {
    title: "Raise Tension",
    prompt: "Take a low-tension scene and rewrite it to maximize suspense without changing the main events.",
    type: "revision"
  }
];
