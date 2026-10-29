/* Original practice questions written for this app, not official JAMB past questions. */
(() => {
  const q = (prompt, options, answer = 0) => {
    const shift = prompt.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % options.length;
    return { prompt, options: options.map((_, index) => options[(index + shift) % options.length]), answer: (answer - shift + options.length) % options.length };
  };
  window.JAMB_QUESTIONS = {
    'english:1-0': [
      q('Choose the word nearest in meaning to reluctant.', ['unwilling', 'careless', 'excited', 'uncertain']),
      q('Choose the word nearest in meaning to concise.', ['brief', 'confusing', 'lengthy', 'informal']),
      q('In “The evidence was ample”, ample means', ['sufficient', 'doubtful', 'hidden', 'recent']),
      q('Choose the word nearest in meaning to diligent.', ['hardworking', 'wealthy', 'fearful', 'impatient']),
      q('A fragile object is one that is', ['easily broken', 'very heavy', 'newly made', 'hard to find'])
    ],
    'english:1-4': [
      q('By the time we arrived, the film ___.', ['had started', 'has start', 'was start', 'will starting']),
      q('Choose the correct verb: She ___ to school every weekday.', ['walks', 'walk', 'walking', 'have walked']),
      q('Choose the correct completion: I ___ my assignment yesterday.', ['submitted', 'submit', 'have submit', 'am submit']),
      q('They ___ dinner when the lights went out.', ['were having', 'have', 'will have', 'are have']),
      q('If he studies, he ___ the test.', ['will pass', 'would passed', 'has pass', 'passing'])
    ],
    'english:2-0': [
      q('Which word begins with the same vowel sound as seat?', ['machine', 'said', 'set', 'sat']),
      q('Which word contains the diphthong /aɪ/ as in time?', ['kite', 'kit', 'keen', 'cot']),
      q('Which word has the same vowel sound as food?', ['mood', 'good', 'blood', 'wood']),
      q('Which word contains the diphthong /eɪ/ as in day?', ['late', 'let', 'lit', 'lot']),
      q('Which word has the same vowel sound as bird?', ['learn', 'bed', 'bad', 'board'])
    ],
    'mathematics:0-2': [
      q('What is 15% of 240?', ['36', '24', '30', '40']),
      q('An item costing ₦8,000 is reduced by 10%. What is its new price?', ['₦7,200', '₦7,000', '₦7,800', '₦8,800']),
      q('An item bought for ₦5,000 is sold for ₦6,250. What is the profit percentage?', ['25%', '20%', '15%', '12.5%']),
      q('Find simple interest on ₦12,000 at 5% per year for 2 years.', ['₦1,200', '₦600', '₦2,400', '₦12,600']),
      q('A value rises from 80 to 100. What is the percentage increase?', ['25%', '20%', '15%', '80%'])
    ],
    'mathematics:1-1': [
      q('Solve simultaneously: x + y = 9 and x - y = 3.', ['x = 6, y = 3', 'x = 3, y = 6', 'x = 5, y = 4', 'x = 9, y = 3']),
      q('If 2x + y = 11 and x + y = 7, find x.', ['4', '3', '7', '18']),
      q('Solve: x + y = 8 and 2x + y = 13.', ['x = 5, y = 3', 'x = 3, y = 5', 'x = 4, y = 4', 'x = 8, y = 5']),
      q('If 3x + y = 10 and x + y = 6, find y.', ['4', '2', '3', '6']),
      q('Solve: x + y = 10 and x - y = 2.', ['x = 6, y = 4', 'x = 4, y = 6', 'x = 5, y = 5', 'x = 8, y = 2'])
    ],
    'mathematics:4-4': [
      q('A fair six-sided die is rolled. What is the probability of getting an even number?', ['1/2', '1/3', '2/3', '1/6']),
      q('A bag has 3 red and 2 blue balls. Probability of picking blue?', ['2/5', '3/5', '1/2', '1/5']),
      q('Two fair coins are tossed. Probability of getting two heads?', ['1/4', '1/2', '3/4', '1/3']),
      q('If P(A) = 0.3, what is the probability A does not occur?', ['0.7', '0.3', '1.3', '0']),
      q('A card numbered 1 to 10 is chosen. Probability it is greater than 7?', ['3/10', '7/10', '1/5', '1/10'])
    ],
    'physics:0-0': [
      q('Which is the SI unit of electric current?', ['ampere', 'volt', 'ohm', 'coulomb']),
      q('Which instrument is most suitable for measuring the diameter of a thin wire?', ['micrometer screw gauge', 'metre rule', 'stopwatch', 'spring balance']),
      q('The SI unit of force is the', ['newton', 'joule', 'watt', 'pascal']),
      q('Which quantity is measured in kilograms?', ['mass', 'weight', 'force', 'pressure']),
      q('A measurement written as 2.50 m suggests accuracy to the nearest', ['0.01 m', '0.1 m', '1 m', '0.001 km'])
    ],
    'physics:0-2': [
      q('A body starts from rest and reaches 20 m/s in 4 s. Its acceleration is', ['5 m/s²', '4 m/s²', '16 m/s²', '80 m/s²']),
      q('Which law says a body remains at rest or in uniform motion unless acted on by a resultant force?', ['Newton’s first law', 'Newton’s second law', 'Newton’s third law', 'Hooke’s law']),
      q('A 2 kg object accelerates at 3 m/s². What resultant force acts on it?', ['6 N', '5 N', '1.5 N', '9 N']),
      q('At the highest point of a projectile’s path, its vertical velocity is', ['zero', 'equal to horizontal velocity', 'at its maximum', 'equal to g']),
      q('A car travels 150 m in 10 s at constant speed. Its speed is', ['15 m/s', '10 m/s', '1500 m/s', '0.067 m/s'])
    ],
    'physics:0-6': [
      q('Work done by a 10 N force moving an object 3 m in the force direction is', ['30 J', '13 J', '3.3 J', '0.3 J']),
      q('Energy possessed by a raised object due to position is', ['gravitational potential energy', 'kinetic energy', 'sound energy', 'electrical energy']),
      q('A machine does 600 J of work in 20 s. Its power is', ['30 W', '120 W', '580 W', '12,000 W']),
      q('Kinetic energy of a body depends on its mass and its', ['speed', 'colour', 'temperature only', 'shape only']),
      q('If force acts perpendicular to displacement, work done by that force is', ['zero', 'maximum', 'negative and non-zero', 'equal to the force'])
    ],
    'chemistry:0-0': [
      q('Which method is best for separating an insoluble solid from a liquid?', ['filtration', 'simple distillation', 'fractional distillation', 'chromatography']),
      q('Salt can be obtained from salt solution by', ['evaporation and crystallisation', 'filtration only', 'a separating funnel', 'sublimation']),
      q('Which method separates miscible liquids with different boiling points?', ['fractional distillation', 'filtration', 'decantation', 'magnetic separation']),
      q('Iron filings and sulfur can first be separated using a', ['magnet', 'filter paper', 'separating funnel', 'thermometer']),
      q('Paper chromatography separates substances mainly because they', ['move at different rates with the solvent', 'have identical solubilities', 'all evaporate instantly', 'are attracted to a magnet'])
    ],
    'chemistry:0-3': [
      q('The atomic number of an element equals the number of', ['protons in its nucleus', 'neutrons in its nucleus', 'shells in its atom', 'nucleons plus electrons']),
      q('An atom with 11 protons and 10 electrons has a charge of', ['+1', '-1', '0', '+2']),
      q('An ionic bond is formed mainly by', ['transfer of electrons', 'sharing of protons', 'sharing of neutrons', 'transfer of nuclei']),
      q('Isotopes have the same number of protons but different numbers of', ['neutrons', 'electrons in neutral atoms', 'protons', 'atomic numbers']),
      q('A covalent bond is formed when atoms', ['share electron pairs', 'exchange neutrons', 'lose all protons', 'share nuclei'])
    ],
    'chemistry:0-7': [
      q('A solution with pH 2 is', ['acidic', 'neutral', 'alkaline', 'a salt only']),
      q('Which indicator turns red in acid and blue in alkaline solution?', ['litmus', 'starch', 'limewater', 'phenolphthalein only']),
      q('An acid reacts with a base to produce salt and', ['water', 'hydrogen only', 'oxygen', 'carbon']),
      q('What conjugate base forms when HCl donates a proton?', ['Cl⁻', 'H⁺', 'OH⁻', 'Na⁺']),
      q('Which substance is commonly used to neutralise excess acidity in soil?', ['calcium carbonate', 'sodium chloride', 'ethanol', 'copper'])
    ]
  };
})();
