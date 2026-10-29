/* Original practice questions written for this app, not official JAMB past questions. */
(() => {
  const q = (prompt, options, answer = 0) => {
    const shift = prompt.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % options.length;
    return { prompt, options: options.map((_, index) => options[(index + shift) % options.length]), answer: (answer - shift + options.length) % options.length };
  };
  window.JAMB_QUESTIONS = {
    'english:0-0': [
      q('A paragraph that explains how a water filter works is mainly', ['expository', 'narrative', 'descriptive', 'dialogue']),
      q('A passage recounting a traveller’s journey in sequence is mainly', ['narrative', 'expository', 'argumentative', 'instructional']),
      q('A passage that urges readers to support a public health campaign is', ['persuasive', 'descriptive', 'narrative', 'expository only']),
      q('A passage that presents reasons for and against a policy is mainly', ['argumentative', 'narrative', 'descriptive', 'dramatic']),
      q('A writer describing the colour, shape and texture of a market scene uses mainly', ['description', 'argumentation', 'summary', 'persuasion'])
    ],
    'english:0-1': [
      q('In a paragraph, the sentence that states its central idea is the', ['topic sentence', 'conclusion only', 'quotation', 'footnote']),
      q('If a passage says Ada carried an umbrella and arrived dry despite heavy rain, the reader may infer that', ['the umbrella protected her', 'it did not rain', 'Ada stayed at home', 'the umbrella was broken']),
      q('The main point of a paragraph is its', ['central idea', 'least important example', 'first word', 'longest sentence']),
      q('A detail that supports a topic sentence is best described as', ['relevant evidence or example', 'a contradiction with no explanation', 'an unrelated fact', 'a title']),
      q('An implied meaning is one that the reader', ['concludes from clues rather than reads directly', 'finds stated word for word', 'must ignore', 'gets from the page number'])
    ],
    'english:0-2': [
      q('In “The road was deserted”, deserted means', ['empty of people', 'recently built', 'very wide', 'well lit']),
      q('In “Musa gave the teacher a hand”, the phrase means Musa', ['helped the teacher', 'lent a hand-shaped object', 'waved goodbye', 'injured the teacher']),
      q('In “Although the task was difficult, she completed it”, the word although signals', ['contrast', 'cause', 'addition', 'time']),
      q('In “The book which I borrowed is missing”, the word which introduces a', ['relative clause', 'main clause', 'preposition phrase', 'direct quotation']),
      q('In “They arrived after the meeting ended”, the clause “after the meeting ended” expresses', ['time', 'place', 'purpose', 'condition'])
    ],
    'english:0-3': [
      q('A conclusion drawn from evidence in a passage is an', ['inference', 'alliteration', 'imperative', 'anecdote']),
      q('If a passage states that a bridge is closed and advises motorists to use another route, the sensible deduction is that', ['vehicles should not cross that bridge now', 'the bridge is open to all vehicles', 'the alternative road is closed too', 'no journey is possible']),
      q('A claim supported by reasons and evidence demonstrates', ['logical reasoning', 'rhyme', 'narration only', 'word stress']),
      q('Which is the strongest evidence for the claim that a town’s population grew?', ['census figures from two different years', 'one person’s guess', 'the colour of a town map', 'a story with no date']),
      q('When a writer’s conclusion does not follow from the stated evidence, the reasoning is', ['illogical', 'a synonym', 'a summary', 'a homophone'])
    ],
    'english:0-4': [
      q('When studying a prescribed reading text, the best evidence for a character’s motive is', ['the character’s words and actions in the text', 'the cover colour alone', 'a guess unrelated to events', 'the number of pages']),
      q('A theme in a literary text is its', ['central idea or message', 'list of chapter titles', 'publisher’s address', 'word count']),
      q('The setting of a story refers mainly to its', ['time and place', 'author’s handwriting', 'plot ending only', 'number of characters']),
      q('A narrator who uses “I” and takes part in the events is using', ['first-person narration', 'third-person narration', 'stage directions', 'an editorial']),
      q('To support an interpretation of a prescribed text, a student should cite', ['relevant events or words from the text', 'unrelated facts about another book', 'only personal opinion', 'the title repeatedly'])
    ],
    'english:0-5': [
      q('A good summary should', ['retain main ideas in fewer words', 'copy every sentence', 'add new opinions', 'include every minor example']),
      q('When summarising, which detail is usually omitted?', ['a minor example that does not affect the main point', 'the central argument', 'the key result', 'the main cause']),
      q('A synthesis of two passages requires the writer to', ['combine related ideas into a coherent account', 'copy one passage and ignore the other', 'list unrelated words', 'change every fact']),
      q('Which sentence is the most concise summary of “Heavy rains flooded roads, delaying buses and closing two schools”?', ['Flooding disrupted transport and closed two schools.', 'There was a great deal of rain which fell heavily and made many roads become flooded.', 'Buses are vehicles that transport people.', 'Two schools are buildings where pupils learn.']),
      q('In a summary, information should be presented', ['accurately and in the writer’s own words', 'with invented details', 'in the same order as every example only', 'as a personal argument'])
    ],
    'english:1-1': [
      q('Choose the word opposite in meaning to scarce.', ['abundant', 'rare', 'limited', 'few']),
      q('The antonym of expand is', ['contract', 'increase', 'extend', 'enlarge']),
      q('Choose the word opposite in meaning to ancient.', ['modern', 'old', 'historic', 'former']),
      q('The opposite of transparent is', ['opaque', 'clear', 'visible', 'bright']),
      q('Choose the word opposite in meaning to generous.', ['stingy', 'kind', 'giving', 'charitable'])
    ],
    'english:1-2': [
      q('Identify the pattern in “The baby slept.”', ['subject + verb', 'subject + verb + object', 'subject + verb + complement', 'subject + verb + indirect object + object']),
      q('In “The chef prepared a meal”, “a meal” is the', ['direct object', 'subject', 'adverbial', 'subject complement']),
      q('Which sentence has the pattern subject + linking verb + complement?', ['The soup tastes salty.', 'The cook stirred the soup.', 'The cook works daily.', 'The cook gave us soup.']),
      q('In “They elected Kemi captain”, “captain” functions as', ['object complement', 'indirect object', 'subject', 'adverbial']),
      q('The sentence “The children are in the garden” includes a phrase functioning as', ['adverbial of place', 'direct object', 'subject complement noun', 'verb'])
    ],
    'english:1-3': [
      q('In “The little child laughed loudly”, the word little is a/an', ['adjective', 'adverb', 'conjunction', 'preposition']),
      q('In “They arrived early”, early functions as a/an', ['adverb', 'adjective', 'pronoun', 'determiner']),
      q('Which is a conjunction?', ['although', 'beneath', 'quickly', 'honest']),
      q('In “The book is on the table”, on is a', ['preposition', 'pronoun', 'verb', 'adjective']),
      q('In “She gave him the letter”, him is a', ['personal pronoun', 'adjective', 'conjunction', 'determiner'])
    ],
    'english:1-5': [
      q('Choose the correct comparative form: This road is ___ than the old one.', ['narrower', 'narrowest', 'more narrowest', 'most narrow']),
      q('The superlative form of good is', ['best', 'better', 'goodest', 'more good']),
      q('Choose the correct completion: Of the three sisters, Amina is the ___.', ['tallest', 'taller', 'most tall', 'more taller']),
      q('The comparative form of carefully is', ['more carefully', 'carefuller', 'most carefully', 'carefullest']),
      q('Choose the correct sentence.', ['This exercise is less difficult than the last one.', 'This exercise is least difficult than the last one.', 'This exercise is more easier than the last one.', 'This exercise is most easy than the last one.'])
    ],
    'english:1-6': [
      q('Choose the correct question tag: You are ready, ___.', ['aren’t you?', 'are you?', 'don’t you?', 'isn’t it?']),
      q('She has finished the work, ___.', ['hasn’t she?', 'doesn’t she?', 'isn’t she?', 'didn’t she?']),
      q('They can swim, ___.', ['can’t they?', 'do they?', 'aren’t they?', 'won’t they?']),
      q('Let us begin, ___.', ['shall we?', 'will you?', 'do we?', 'aren’t we?']),
      q('Nobody called, ___.', ['did they?', 'didn’t nobody?', 'did he?', 'wasn’t it?'])
    ],
    'english:1-7': [
      q('Choose the correctly punctuated sentence.', ['“Where are you going?” asked Bisi.', '“Where are you going”? asked Bisi.', 'Where are you going, asked Bisi?', '“Where are you going” asked Bisi.']),
      q('Which spelling is correct?', ['accommodation', 'accomodation', 'acommodation', 'accommadation']),
      q('Choose the correctly punctuated sentence.', ['After lunch, we returned to class.', 'After lunch we returned, to class.', 'After, lunch we returned to class.', 'After lunch we, returned to class.']),
      q('Which sentence uses an apostrophe correctly for a plural possessive?', ['The teachers’ meeting begins at noon.', 'The teacher’s meeting begins at noon. (when several teachers own it)', 'The teachers meeting’s begins at noon.', 'The teachers’s meeting begins at noon.']),
      q('Choose the correctly spelled word.', ['receive', 'recieve', 'receeve', 'receve'])
    ],
    'english:1-8': [
      q('“He kicked the bucket” is an idiom meaning he', ['died', 'struck a pail', 'won a prize', 'ran quickly']),
      q('“Time is a thief” is an example of', ['metaphor', 'simile', 'alliteration', 'euphemism']),
      q('“As busy as a bee” is a', ['simile', 'metaphor', 'oxymoron', 'pun']),
      q('Choose the sentence using “break the ice” correctly.', ['A joke helped break the ice at the meeting.', 'She broke the ice by freezing the room.', 'The ice broke the meeting.', 'He put ice in a glass to break the ice of water.']),
      q('“The wind whispered through the trees” uses', ['personification', 'hyperbole', 'irony', 'onomatopoeia'])
    ],
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
    'english:2-1': [
      q('Which word begins with the same initial sound as thin?', ['think', 'this', 'tin', 'sin']),
      q('Which word begins with the same initial sound as ship?', ['shoe', 'sip', 'chip', 'zip']),
      q('Which word contains the consonant cluster /str/?', ['street', 'seat', 'tree', 'sheet']),
      q('Which word ends with the same consonant sound as judge?', ['bridge', 'badge', 'church', 'choose']),
      q('Which word begins with the voiced consonant sound /ð/ as in “they”?', ['those', 'thin', 'thank', 'thought'])
    ],
    'english:2-2': [
      q('Which pair consists of homophones?', ['sea / see', 'seat / sit', 'cot / caught', 'ship / sheep']),
      q('Which word rhymes with light?', ['bright', 'late', 'lit', 'let']),
      q('Choose the word that rhymes with train.', ['plain', 'train (same word)', 'trend', 'town']),
      q('Which pair has the same final sound?', ['bake / lake', 'rough / though', 'said / paid', 'cough / through']),
      q('“Knight” and “night” are', ['homophones', 'antonyms', 'synonyms', 'homographs with different sounds'])
    ],
    'english:2-3': [
      q('Which syllable is stressed in the noun PHOtograph?', ['first', 'second', 'third', 'all equally']),
      q('Which syllable is stressed in the word “begin”?', ['second', 'first', 'both equally', 'neither']),
      q('In the noun “record”, the usual stress falls on the', ['first syllable', 'second syllable', 'final sound only', 'two syllables equally']),
      q('Which word is usually stressed on its second syllable?', ['advice', 'table', 'market', 'teacher']),
      q('The word “photographic” is usually stressed on the', ['third syllable', 'first syllable', 'second syllable', 'fourth syllable'])
    ],
    'english:2-4': [
      q('In “I wanted the RED one, not the blue one”, stress on RED emphasizes', ['which colour was wanted', 'who wanted it', 'when it was wanted', 'whether it was wanted']),
      q('In “SHE borrowed my pen”, emphatic stress on SHE clarifies', ['who borrowed the pen', 'what was borrowed', 'whose pen it was', 'when it was borrowed']),
      q('In “I said he borrowed the book”, stressing said can imply that', ['the speaker did say it, contrary to a denial', 'someone else borrowed it', 'the book was not borrowed', 'the speaker bought it']),
      q('Emphatic stress in connected speech is used mainly to', ['highlight contrast or important information', 'change every word’s dictionary meaning', 'mark plural nouns only', 'show a question mark']),
      q('In “They arrived YESTERDAY, not today”, stress on yesterday highlights', ['the time of arrival', 'the people who arrived', 'the place they arrived', 'the method of travel'])
    ],
    'english:2-0': [
      q('Which word begins with the same vowel sound as seat?', ['machine', 'said', 'set', 'sat']),
      q('Which word contains the diphthong /aɪ/ as in time?', ['kite', 'kit', 'keen', 'cot']),
      q('Which word has the same vowel sound as food?', ['mood', 'good', 'blood', 'wood']),
      q('Which word contains the diphthong /eɪ/ as in day?', ['late', 'let', 'lit', 'lot']),
      q('Which word has the same vowel sound as bird?', ['learn', 'bed', 'bad', 'board'])
    ],
    'mathematics:0-0': [
      q('Write 1011₂ in base ten.', ['11', '9', '10', '13']),
      q('Write 19₁₀ in base two.', ['10011₂', '10101₂', '11001₂', '10010₂']),
      q('Find the remainder when 29 is divided by 6.', ['5', '4', '3', '6']),
      q('If 17 ≡ x (mod 5), with 0 ≤ x < 5, find x.', ['2', '3', '1', '4']),
      q('Evaluate 7 + 9 in base eight.', ['20₈', '16₈', '18₈', '21₈'])
    ],
    'mathematics:0-1': [
      q('Evaluate 3/4 + 1/8.', ['7/8', '4/12', '5/8', '1']),
      q('Write 0.375 as a fraction in its simplest form.', ['3/8', '3/10', '5/8', '375/100']),
      q('Round 0.006784 to 2 significant figures.', ['0.0068', '0.0067', '0.0070', '0.00678']),
      q('How many decimal places are in 12.040?', ['3', '2', '4', '5']),
      q('Evaluate 5/6 − 1/4.', ['7/12', '4/10', '2/3', '1/2'])
    ],
    'mathematics:0-3': [
      q('Simplify 2³ × 2⁴.', ['2⁷', '2¹²', '4⁷', '2¹']),
      q('Evaluate log₁₀ 1000.', ['3', '2', '10', '30']),
      q('Simplify √50.', ['5√2', '25√2', '10√5', '2√25']),
      q('If log₂ x = 5, find x.', ['32', '10', '25', '16']),
      q('Evaluate 16^(3/4).', ['8', '4', '12', '64'])
    ],
    'mathematics:0-4': [
      q('If A={1,2,3} and B={3,4}, find A∩B.', ['{3}', '{1,2,3,4}', '{1,2}', '{4}']),
      q('A set has 5 elements. How many subsets does it have?', ['32', '10', '25', '5']),
      q('In a class of 30, 18 study French, 12 study Hausa and 5 study both. How many study at least one?', ['25', '30', '35', '20']),
      q('If n(A)=12, n(B)=9 and n(A∩B)=4, find n(A∪B).', ['17', '21', '25', '13']),
      q('Which set contains no elements?', ['∅', '{0}', '{∅}', '{1}'])
    ],
    'mathematics:0-2': [
      q('What is 15% of 240?', ['36', '24', '30', '40']),
      q('An item costing ₦8,000 is reduced by 10%. What is its new price?', ['₦7,200', '₦7,000', '₦7,800', '₦8,800']),
      q('An item bought for ₦5,000 is sold for ₦6,250. What is the profit percentage?', ['25%', '20%', '15%', '12.5%']),
      q('Find simple interest on ₦12,000 at 5% per year for 2 years.', ['₦1,200', '₦600', '₦2,400', '₦12,600']),
      q('A value rises from 80 to 100. What is the percentage increase?', ['25%', '20%', '15%', '80%'])
    ],
    'mathematics:1-0': [
      q('Simplify (3x² + 2x − 1) + (x² − 5x + 4).', ['4x² − 3x + 3', '4x² + 7x + 3', '2x² − 3x + 5', '4x² − 7x − 3']),
      q('Factorise x² − 5x + 6.', ['(x−2)(x−3)', '(x+2)(x+3)', '(x−1)(x−6)', '(x+1)(x−6)']),
      q('When x³ − 4x + 1 is divided by x − 2, what is the remainder?', ['1', '0', '2', '−1']),
      q('Factorise 2x² + 7x + 3.', ['(2x+1)(x+3)', '(2x+3)(x+1)', '(x+1)(x+3)', '(2x−1)(x−3)']),
      q('If f(x)=x²+3x−2, find f(−1).', ['−4', '0', '2', '−6'])
    ],
    'mathematics:1-2': [
      q('For y=x²−4, what are the x-intercepts?', ['−2 and 2', '0 and 4', '−4 and 4', '−2 only']),
      q('A straight-line graph passes through (0,3) and (2,7). What is its gradient?', ['2', '4', '3', '1/2']),
      q('The graph y=x² opens', ['upwards', 'downwards', 'to the left', 'to the right']),
      q('If y=2x+1, what is y when x=3?', ['7', '6', '5', '8']),
      q('On a distance-time graph, the gradient represents', ['speed', 'distance', 'time', 'acceleration'])
    ],
    'mathematics:1-3': [
      q('If y varies directly as x and y=12 when x=3, find y when x=5.', ['20', '15', '4', '60']),
      q('If y varies inversely as x and y=6 when x=4, find y when x=8.', ['3', '12', '6', '1.5']),
      q('z varies jointly as x and y. If z=24 when x=3,y=4, find z when x=2,y=5.', ['20', '10', '40', '16']),
      q('If y varies directly as x² and y=18 when x=3, find y when x=2.', ['8', '12', '6', '4']),
      q('If p varies inversely as the square of r and p=8 when r=2, find p when r=4.', ['2', '4', '1', '16'])
    ],
    'mathematics:1-4': [
      q('Solve 3x − 5 < 7.', ['x < 4', 'x > 4', 'x < 2/3', 'x > 2/3']),
      q('Which interval satisfies x² − 9 < 0?', ['−3 < x < 3', 'x < −3 or x > 3', 'x > 3', 'x < 3']),
      q('For which x is (x−1)(x+2) ≥ 0?', ['x ≤ −2 or x ≥ 1', '−2 ≤ x ≤ 1', 'x ≥ −2', 'x ≤ 1']),
      q('Solve 2x + 1 ≥ 9.', ['x ≥ 4', 'x ≤ 4', 'x ≥ 5', 'x ≤ 5']),
      q('The solution of x² − 4x ≤ 0 is', ['0 ≤ x ≤ 4', 'x ≤ 0 or x ≥ 4', 'x ≥ 4', 'x ≤ 4'])
    ],
    'mathematics:1-5': [
      q('Find the 10th term of the arithmetic progression 3, 7, 11, ...', ['39', '35', '43', '40']),
      q('Find the sum of the first 5 terms of 2, 6, 18, ...', ['242', '162', '244', '80']),
      q('The nth term of an arithmetic progression is 5+3(n−1). Find the 8th term.', ['26', '24', '29', '23']),
      q('Find the common ratio of 81, 27, 9, ...', ['1/3', '3', '−3', '1/9']),
      q('Find the sum of the first 10 positive integers.', ['55', '50', '45', '100'])
    ],
    'mathematics:1-6': [
      q('For a binary operation a*b=a+b+1, find 2*3.', ['6', '5', '7', '8']),
      q('For a*b=a+b, the identity element is', ['0', '1', '−1', 'a']),
      q('For a*b=a+b−4, find the identity element e.', ['4', '0', '−4', '1']),
      q('Under a*b=a+b, the inverse of 7 is', ['−7', '7', '0', '1/7']),
      q('On the integers, define a*b=a−b. Is the operation commutative?', ['No, since generally a−b ≠ b−a', 'Yes, because subtraction is commutative', 'Yes, for all integers', 'Only when a=0'])
    ],
    'mathematics:1-7': [
      q('If A=[[1,2],[3,4]] and B=[[2,0],[1,−1]], find A+B.', ['[[3,2],[4,3]]', '[[3,2],[3,−5]]', '[[2,0],[3,4]]', '[[1,2],[4,3]]']),
      q('Find the determinant of [[3,2],[1,4]].', ['10', '14', '8', '−10']),
      q('Find the inverse of [[1,0],[0,2]].', ['[[1,0],[0,1/2]]', '[[1,0],[0,2]]', '[[0,1],[2,0]]', '[[2,0],[0,1]]']),
      q('If A=[[1,2],[0,1]], find the top-right entry of A².', ['4', '2', '1', '0']),
      q('A 2×2 matrix has determinant 0. It is', ['singular and has no inverse', 'the identity matrix', 'always a zero matrix', 'symmetric'])
    ],
    'mathematics:2-0': [
      q('The sum of the interior angles of a hexagon is', ['720°', '540°', '900°', '1080°']),
      q('Angles on a straight line add up to', ['180°', '90°', '270°', '360°']),
      q('An angle at the circumference standing on a diameter is', ['90°', '45°', '180°', '60°']),
      q('Each exterior angle of a regular octagon is', ['45°', '60°', '90°', '135°']),
      q('Two parallel lines are crossed by a transversal. Alternate interior angles are', ['equal', 'supplementary in every case', 'always right angles', 'complementary'])
    ],
    'mathematics:2-1': [
      q('Find the area of a circle of radius 7 cm. Use π=22/7.', ['154 cm²', '44 cm²', '308 cm²', '49 cm²']),
      q('Find the volume of a cylinder of radius 3 cm and height 5 cm.', ['45π cm³', '15π cm³', '30π cm³', '90π cm³']),
      q('The arc length of a 90° sector in a circle of radius 8 cm is', ['4π cm', '8π cm', '2π cm', '16π cm']),
      q('Find the total surface area of a cube of side 4 cm.', ['96 cm²', '64 cm²', '24 cm²', '16 cm²']),
      q('A sector is 60° of a circle. What fraction of the circle’s area is it?', ['1/6', '1/3', '1/4', '1/5'])
    ],
    'mathematics:2-2': [
      q('The locus of points equidistant from two fixed points A and B is the', ['perpendicular bisector of AB', 'circle with centre A', 'line AB only', 'angle bisector at A']),
      q('The locus of points at a fixed distance 5 cm from point P is a', ['circle centred at P with radius 5 cm', 'straight line through P', 'pair of parallel lines', 'perpendicular bisector of P']),
      q('A point moves so that it is equidistant from two intersecting lines. Its locus lies on the', ['angle bisectors of the lines', 'parallel to both lines', 'circle through their intersection only', 'perpendicular bisector of either line']),
      q('The locus of points inside or on a circle of radius 3 cm centred at O is', ['the circular region with centre O and radius 3 cm', 'the circumference only', 'a diameter of length 3 cm', 'two parallel lines 3 cm apart']),
      q('A point is always 4 cm from a straight line l. Its locus consists of', ['two lines parallel to l, 4 cm away on either side', 'one circle touching l', 'l itself', 'the perpendicular bisector of l'])
    ],
    'mathematics:2-3': [
      q('Find the midpoint of (2,−1) and (6,5).', ['(4,2)', '(8,4)', '(2,3)', '(4,3)']),
      q('Find the gradient of the line through (1,2) and (4,8).', ['2', '3', '1/2', '6']),
      q('Find the distance between (0,0) and (3,4).', ['5', '7', '4', '25']),
      q('A line parallel to y=3x−2 has gradient', ['3', '−2', '−1/3', '1/3']),
      q('Which is the equation of a line with gradient 2 passing through (0,−1)?', ['y=2x−1', 'y=2x+1', 'y=x−2', 'y=−2x−1'])
    ],
    'mathematics:2-4': [
      q('If sin θ=3/5 for an acute angle θ, find cos θ.', ['4/5', '3/4', '5/4', '1/5']),
      q('Evaluate sin 30°.', ['1/2', '√3/2', '1', '0']),
      q('A 10 m ladder makes an angle of 30° with the ground. How high up a vertical wall does it reach?', ['5 m', '5√3 m', '10√3 m', '20 m']),
      q('A bearing is measured', ['clockwise from north', 'anticlockwise from east', 'clockwise from south', 'from the nearest parallel']),
      q('In a triangle, a=6, b=8 and included angle C=90°. Find side c.', ['10', '14', '√28', '2'])
    ],
    'mathematics:1-1': [
      q('Solve simultaneously: x + y = 9 and x - y = 3.', ['x = 6, y = 3', 'x = 3, y = 6', 'x = 5, y = 4', 'x = 9, y = 3']),
      q('If 2x + y = 11 and x + y = 7, find x.', ['4', '3', '7', '18']),
      q('Solve: x + y = 8 and 2x + y = 13.', ['x = 5, y = 3', 'x = 3, y = 5', 'x = 4, y = 4', 'x = 8, y = 5']),
      q('If 3x + y = 10 and x + y = 6, find y.', ['4', '2', '3', '6']),
      q('Solve: x + y = 10 and x - y = 2.', ['x = 6, y = 4', 'x = 4, y = 6', 'x = 5, y = 5', 'x = 8, y = 2'])
    ],
    'mathematics:3-0': [
      q('Differentiate f(x)=3x²−4x+1 with respect to x.', ['6x−4', '3x−4', '6x+1', '3x²−4']),
      q('Find dy/dx if y=x³.', ['3x²', 'x²', '3x', 'x⁴/4']),
      q('If y=sin x, dy/dx is', ['cos x', '−cos x', 'sin x', '−sin x']),
      q('Using first principles, the derivative of x² at x=2 is', ['4', '2', '8', '1']),
      q('Differentiate y=5x⁴.', ['20x³', '5x³', '20x⁴', 'x⁵'])
    ],
    'mathematics:3-1': [
      q('For y=x²−6x+5, at what x-coordinate does the curve have a stationary point?', ['3', '−3', '6', '−6']),
      q('A particle has displacement s=t²+4t. Find its velocity at t=3.', ['10', '7', '13', '6']),
      q('A differentiable function may have a maximum or minimum where', ['dy/dx=0', 'y=0 only', 'x=0 only', 'd²y/dx²=0 always']),
      q('The curve y=x²−4x+1 has a minimum because its second derivative is', ['positive', 'negative', 'zero', 'undefined']),
      q('A rectangle has perimeter 20 cm. Its area is x(10−x). At what x is the area greatest?', ['5 cm', '10 cm', '2.5 cm', '20 cm'])
    ],
    'mathematics:3-2': [
      q('Evaluate ∫ 6x² dx.', ['2x³+C', '6x³+C', '3x²+C', '2x+C']),
      q('Evaluate ∫ cos x dx.', ['sin x+C', '−sin x+C', '−cos x+C', 'sin²x+C']),
      q('Evaluate ∫₀² 2x dx.', ['4', '2', '8', '0']),
      q('Find ∫(3x²+2) dx.', ['x³+2x+C', '6x+2+C', 'x³+2+C', '3x³+2x+C']),
      q('If dy/dx=4x and y=3 when x=0, find y.', ['2x²+3', '4x²+3', '2x+3', 'x²+3'])
    ],
    'mathematics:3-3': [
      q('Find the area under y=2x from x=0 to x=3.', ['9 square units', '6 square units', '12 square units', '3 square units']),
      q('The area under y=x² from x=0 to x=2 is', ['8/3 square units', '4 square units', '2 square units', '16/3 square units']),
      q('The area between y=4 and the x-axis from x=1 to x=5 is', ['16 square units', '20 square units', '4 square units', '10 square units']),
      q('The area under y=3x² between x=0 and x=1 is', ['1 square unit', '3 square units', '1/3 square unit', '2 square units']),
      q('To find area under y=f(x) from x=a to x=b, evaluate', ['∫ₐᵇ f(x) dx', 'f(b)−f(a)', '∫ f′(x) dx without limits', 'f(a)+f(b)'])
    ],
    'mathematics:4-0': [
      q('A bar chart is most suitable for displaying', ['frequencies of distinct categories', 'continuous data grouped into touching intervals only', 'a single measurement', 'the exact path of a moving object']),
      q('In a pie chart, a sector representing 25% of the data has angle', ['90°', '25°', '45°', '120°']),
      q('In a histogram, bar areas represent', ['frequencies', 'class midpoints', 'cumulative totals only', 'percentages of angles']),
      q('A frequency distribution groups data into', ['classes with corresponding frequencies', 'angles without labels', 'equations only', 'random samples without counts']),
      q('A cumulative frequency curve is also called an', ['ogive', 'histogram', 'pictogram', 'scatter graph'])
    ],
    'mathematics:4-1': [
      q('Find the mean of 2, 4, 6 and 8.', ['5', '4', '6', '20']),
      q('Find the median of 3, 9, 4, 7 and 2.', ['4', '3', '5', '7']),
      q('Find the mode of 1, 2, 2, 3, 4.', ['2', '1', '3', '12']),
      q('For the ordered data 2, 3, 5, 8, 11, the median is', ['5', '3', '5.8', '8']),
      q('The median can be estimated from a cumulative frequency graph by locating the value at', ['half the total frequency', 'the maximum frequency', 'zero frequency', 'twice the total frequency'])
    ],
    'mathematics:4-2': [
      q('Find the range of 4, 9, 1, 7.', ['8', '9', '6', '5']),
      q('Find the population variance of 2, 4, 6.', ['8/3', '2', '4', '16/3']),
      q('If every observation in a data set is increased by 5, its range', ['stays the same', 'increases by 5', 'is multiplied by 5', 'becomes zero']),
      q('Standard deviation is the positive square root of the', ['variance', 'mean', 'range', 'median']),
      q('For data 1, 1, 3, 3, the mean deviation about the mean is', ['1', '0', '2', '3'])
    ],
    'mathematics:4-3': [
      q('How many ways can 3 different books be arranged on a shelf?', ['6', '3', '9', '1']),
      q('How many ways can 2 students be chosen from 5?', ['10', '20', '5', '25']),
      q('How many distinct arrangements are there of the letters in CAT?', ['6', '3', '9', '1']),
      q('Evaluate 5P2.', ['20', '10', '25', '5']),
      q('In a group of 6 people, how many pairs can be selected?', ['15', '30', '12', '36'])
    ],
    'mathematics:4-4': [
      q('A fair six-sided die is rolled. What is the probability of getting an even number?', ['1/2', '1/3', '2/3', '1/6']),
      q('A bag has 3 red and 2 blue balls. Probability of picking blue?', ['2/5', '3/5', '1/2', '1/5']),
      q('Two fair coins are tossed. Probability of getting two heads?', ['1/4', '1/2', '3/4', '1/3']),
      q('If P(A) = 0.3, what is the probability A does not occur?', ['0.7', '0.3', '1.3', '0']),
      q('A card numbered 1 to 10 is chosen. Probability it is greater than 7?', ['3/10', '7/10', '1/5', '1/10'])
    ],
    'physics:0-1': [
      q('Which quantity is a scalar?', ['speed', 'displacement', 'force', 'acceleration']),
      q('A student walks 3 m east then 4 m west. The displacement is', ['1 m west', '7 m west', '1 m east', '7 m east']),
      q('The SI unit of displacement is', ['metre', 'metre per second', 'newton', 'second']),
      q('A vector quantity has', ['magnitude and direction', 'magnitude only', 'direction only', 'neither magnitude nor direction']),
      q('A person walks one complete lap of a 400 m track and returns to the start. Their displacement is', ['zero', '400 m', '800 m', '200 m'])
    ],
    'physics:0-3': [
      q('The gravitational field strength g is defined as', ['force per unit mass', 'mass per unit force', 'work per unit time', 'weight per unit volume']),
      q('A 2 kg mass is on Earth where g=10 N/kg. Its weight is', ['20 N', '2 N', '0.2 N', '12 N']),
      q('Gravitational potential energy near Earth’s surface is given by', ['mgh', '1/2 mv²', 'F/t', 'ma']),
      q('If the distance between two masses is doubled, their gravitational force becomes', ['one quarter', 'one half', 'double', 'four times']),
      q('The weight of an object on the Moon is less than on Earth mainly because the Moon has', ['a weaker gravitational field', 'no mass', 'no gravity at all', 'a larger radius only'])
    ],
    'physics:0-4': [
      q('For a body in equilibrium, the resultant force and resultant moment are', ['both zero', 'both maximum', 'equal to its weight', 'always opposite but non-zero']),
      q('A 10 N force acts 0.5 m from a pivot at right angles. Its moment is', ['5 N m', '20 N m', '10.5 N m', '0.05 N m']),
      q('The principle of moments states that for rotational equilibrium, total clockwise moment equals total', ['anticlockwise moment', 'upward force', 'weight', 'linear momentum']),
      q('A uniform metre rule balances at the 50 cm mark. Its centre of gravity is at', ['50 cm', '0 cm', '100 cm', '25 cm']),
      q('A couple consists of two forces that are', ['equal, opposite and separated', 'equal and in the same direction', 'unequal and parallel', 'acting through one point'])
    ],
    'physics:0-5': [
      q('Friction acts', ['opposite to relative motion or its tendency', 'in the direction of motion in every case', 'only on stationary objects', 'at right angles to every surface']),
      q('The coefficient of friction is the ratio of limiting friction to', ['normal reaction', 'weight only', 'area of contact', 'velocity']),
      q('A 20 N force is just sufficient to move a block when normal reaction is 50 N. The limiting friction coefficient is', ['0.4', '2.5', '30', '70']),
      q('Lubrication reduces friction by', ['separating surfaces with a thin fluid layer', 'increasing surface roughness', 'increasing the normal reaction', 'removing the load']),
      q('A useful effect of friction is that it allows', ['walking without slipping', 'all machines to run without energy loss', 'objects to move forever', 'heat transfer to stop'])
    ],
    'physics:0-7': [
      q('The mechanical advantage of a machine is load divided by', ['effort', 'distance moved by load', 'time taken', 'power input']),
      q('A machine lifts a 600 N load with an effort of 150 N. Its mechanical advantage is', ['4', '0.25', '450', '750']),
      q('Efficiency of a machine is', ['useful work output divided by work input', 'work input divided by time', 'load divided by distance', 'effort divided by load']),
      q('A single fixed pulley is mainly used to', ['change the direction of effort', 'multiply force fourfold', 'reduce the load’s mass', 'eliminate work']),
      q('A machine has velocity ratio 5 and mechanical advantage 4. Its efficiency is', ['80%', '125%', '20%', '45%'])
    ],
    'physics:0-8': [
      q('Hooke’s law applies when extension is proportional to force, provided the', ['elastic limit is not exceeded', 'spring is permanently deformed', 'force is zero', 'temperature is absolute zero']),
      q('A spring extends 0.04 m under a force of 8 N. Its spring constant is', ['200 N/m', '0.005 N/m', '32 N/m', '12 N/m']),
      q('The SI unit of Young’s modulus is', ['pascal', 'newton', 'metre', 'joule']),
      q('Tensile strain is extension divided by', ['original length', 'cross-sectional area', 'applied force', 'volume']),
      q('For a wire, Young’s modulus equals tensile stress divided by', ['tensile strain', 'extension', 'force', 'length'])
    ],
    'physics:0-9': [
      q('Pressure is force divided by', ['area', 'volume', 'distance', 'time']),
      q('A force of 200 N acts on an area of 0.5 m². The pressure is', ['400 Pa', '100 Pa', '200.5 Pa', '0.0025 Pa']),
      q('Pressure in a liquid at rest increases with', ['depth', 'surface area only', 'container colour', 'distance from the Earth’s centre only']),
      q('Atmospheric pressure is measured with a', ['barometer', 'hydrometer', 'thermometer', 'ammeter']),
      q('The pressure at depth h in a liquid of density ρ is', ['ρgh', 'ρg/h', 'gh/ρ', 'ρh/g'])
    ],
    'physics:0-10': [
      q('An object floats in a liquid when its average density is', ['less than the liquid density', 'greater than the liquid density in every case', 'equal to zero', 'unrelated to the liquid density']),
      q('According to Archimedes’ principle, upthrust equals the weight of', ['fluid displaced', 'object immersed', 'container', 'fluid above the object']),
      q('A body displaces 0.002 m³ of water. Taking water density as 1000 kg/m³ and g=10 N/kg, the upthrust is', ['20 N', '2 N', '200 N', '0.2 N']),
      q('The instrument used to compare relative densities of liquids is a', ['hydrometer', 'barometer', 'calorimeter', 'manometer']),
      q('The level of liquid in communicating vessels at rest is the same when the liquids have', ['the same density', 'different temperatures only', 'different volumes', 'no pressure'])
    ],
    'physics:0-11': [
      q('The SI unit of thermodynamic temperature is', ['kelvin', 'degree Celsius', 'joule', 'watt']),
      q('Convert 27°C to kelvin.', ['300 K', '246 K', '27 K', '310 K']),
      q('A thermometer works by using a physical property that changes with', ['temperature', 'mass only', 'pressure only', 'colour of the container']),
      q('The lower fixed point on the Celsius scale is the temperature of', ['melting pure ice at standard atmospheric pressure', 'boiling water at any pressure', 'room temperature', 'liquid nitrogen']),
      q('A thermometer with a narrow capillary improves sensitivity because a small volume change causes a', ['larger length change', 'smaller temperature change', 'change in mass', 'change in pressure only'])
    ],
    'physics:0-12': [
      q('The quantity of heat required to raise the temperature of mass m by ΔT is', ['mcΔT', 'm/cΔT', 'c/(mΔT)', 'mL']),
      q('The SI unit of specific heat capacity is', ['J kg⁻¹ K⁻¹', 'J kg K', 'W kg⁻¹', 'N m⁻¹']),
      q('How much heat raises 2 kg of a substance with c=500 J kg⁻¹ K⁻¹ by 3 K?', ['3000 J', '1000 J', '750 J', '6000 J']),
      q('During melting of a pure solid, its temperature remains constant because supplied heat is used to', ['overcome intermolecular forces', 'increase kinetic energy only', 'reduce its mass', 'increase pressure']),
      q('The heat needed to change a liquid to vapour at constant temperature is m times the', ['specific latent heat of vaporisation', 'specific heat capacity', 'temperature change', 'thermal conductivity'])
    ],
    'physics:0-13': [
      q('During boiling, a pure liquid changes to gas', ['throughout the liquid at its boiling point', 'only at the surface at any temperature', 'without absorbing energy', 'only when pressure is zero']),
      q('The temperature of a pure substance remains constant during a change of state because energy changes its', ['state rather than its average kinetic energy', 'mass', 'chemical identity in every case', 'volume only']),
      q('Evaporation differs from boiling because evaporation', ['can occur at the surface below boiling point', 'occurs throughout the liquid only', 'requires a fixed boiling temperature', 'cannot cause cooling']),
      q('The latent heat of fusion is the heat required to change unit mass from', ['solid to liquid without temperature change', 'liquid to gas with temperature increase', 'gas to liquid with temperature increase', 'liquid to solid with temperature decrease']),
      q('When a gas condenses to a liquid, it', ['releases latent heat', 'absorbs latent heat', 'has no energy transfer', 'must become hotter than its boiling point'])
    ],
    'physics:0-14': [
      q('A metal rod expands when heated because its particles', ['vibrate about positions farther apart on average', 'lose all kinetic energy', 'become smaller', 'change into different atoms']),
      q('A 2 m rod has linear expansivity 1.2×10⁻⁵ K⁻¹. Its increase in length for a 50 K rise is', ['0.0012 m', '0.012 m', '0.00012 m', '1.2 m']),
      q('The expansion joint in a railway track is provided to', ['allow expansion in hot weather', 'increase friction', 'reduce the rail mass', 'prevent heat transfer']),
      q('For equal temperature rises, the area expansion of an isotropic sheet is approximately', ['twice its linear expansion coefficient times its original area', 'half its linear expansion', 'equal to its volume expansion', 'independent of its area']),
      q('A bimetallic strip bends on heating because its two metals have different', ['coefficients of expansion', 'densities only', 'electrical charges', 'melting points only'])
    ],
    'physics:0-15': [
      q('Boyle’s law states that at constant temperature, pressure is inversely proportional to', ['volume', 'absolute temperature', 'mass', 'density only']),
      q('A gas at 300 K is heated at constant pressure to 450 K. If its initial volume is 200 cm³, its final volume is', ['300 cm³', '150 cm³', '400 cm³', '250 cm³']),
      q('The pressure law states that for a fixed mass of gas at constant volume, pressure is proportional to', ['absolute temperature', 'Celsius temperature', 'volume', 'mass']),
      q('The ideal gas equation is', ['pV=nRT', 'pT= nRV', 'pV=RT/n', 'p=nR/VT']),
      q('A gas occupies 2 m³ at 100 kPa. At 200 kPa and constant temperature its volume is', ['1 m³', '4 m³', '2 m³', '0.5 m³'])
    ],
    'physics:0-16': [
      q('A vapour is a substance in the gaseous state that', ['can be liquefied by pressure at a temperature below its critical temperature', 'cannot condense at any temperature', 'is always an ideal gas', 'has no intermolecular forces']),
      q('Relative humidity compares actual water vapour pressure with the', ['saturated vapour pressure at the same temperature', 'atmospheric pressure only', 'boiling point', 'dew point pressure only']),
      q('Dew forms when air is cooled to its', ['dew point', 'boiling point', 'critical temperature', 'melting point']),
      q('Evaporation causes cooling because the escaping molecules have, on average,', ['higher kinetic energy', 'lower kinetic energy', 'zero kinetic energy', 'the same energy as all remaining molecules']),
      q('A liquid boils when its saturated vapour pressure equals', ['the external pressure', 'zero', 'its density', 'the latent heat'])
    ],
    'physics:0-17': [
      q('In the kinetic theory model, the average kinetic energy of gas molecules is proportional to', ['absolute temperature', 'pressure only', 'volume only', 'molecular colour']),
      q('Brownian motion is evidence for', ['the random motion of microscopic particles due to molecular impacts', 'the existence of empty space only', 'gravity having no effect', 'the wave nature of light']),
      q('Matter consists of particles that are in', ['continuous motion', 'complete rest in all states', 'motion only as gases', 'motion only when heated']),
      q('Diffusion is fastest in gases mainly because gas particles', ['move rapidly and are far apart', 'are fixed in a lattice', 'have no mass', 'attract each other strongly']),
      q('When a gas is compressed at constant temperature, its molecules', ['occupy a smaller volume but their average kinetic energy stays the same', 'lose all kinetic energy', 'become larger', 'stop colliding'])
    ],
    'physics:0-18': [
      q('Heat transfer through a vacuum occurs by', ['radiation', 'conduction only', 'convection only', 'diffusion']),
      q('Convection in a fluid occurs because heated regions', ['become less dense and rise', 'become denser and sink', 'stop moving', 'conduct no heat']),
      q('A shiny silver surface is a poor', ['absorber and emitter of thermal radiation', 'reflector of visible light', 'conductor of electricity', 'reflector of radiation']),
      q('The best thermal conductor among these is generally', ['copper', 'wood', 'air', 'cork']),
      q('A vacuum flask reduces heat transfer by conduction and convection through its', ['vacuum space', 'silvered surfaces', 'tight stopper only', 'glass colour'])
    ],
    'physics:0-19': [
      q('The distance between two successive crests is the', ['wavelength', 'amplitude', 'period', 'frequency']),
      q('A wave has frequency 5 Hz and wavelength 2 m. Its speed is', ['10 m/s', '2.5 m/s', '7 m/s', '0.4 m/s']),
      q('The maximum displacement of a vibrating particle from equilibrium is its', ['amplitude', 'wavelength', 'period', 'wave speed']),
      q('A wave transfers', ['energy without net transfer of matter', 'matter only', 'both matter and no energy', 'neither energy nor matter']),
      q('If a wave completes 20 oscillations in 4 s, its frequency is', ['5 Hz', '80 Hz', '0.2 Hz', '16 Hz'])
    ],
    'physics:0-20': [
      q('Sound waves in air are', ['longitudinal', 'transverse', 'electromagnetic', 'stationary only']),
      q('Sound cannot travel through', ['a vacuum', 'water', 'steel', 'air']),
      q('An echo is heard 0.4 s after a sound is made. If sound speed is 340 m/s, the reflecting surface is', ['68 m away', '136 m away', '340 m away', '17 m away']),
      q('The speed of sound is generally greatest in', ['solids', 'gases', 'vacuum', 'all media equally']),
      q('A sound wave of frequency 250 Hz has a period of', ['0.004 s', '4 s', '0.25 s', '250 s'])
    ],
    'physics:0-21': [
      q('The pitch of a sound depends mainly on its', ['frequency', 'amplitude', 'speed', 'intensity only']),
      q('The loudness of a sound is related mainly to its', ['amplitude', 'frequency only', 'wavelength only', 'speed']),
      q('The quality or timbre of a musical note helps distinguish sounds with the same pitch and loudness because their', ['waveforms and harmonics differ', 'speeds differ in the same air', 'frequencies are zero', 'amplitudes are identical']),
      q('A sound above the human audible range is called', ['ultrasound', 'infrasound', 'an echo', 'a beat']),
      q('The approximate audible frequency range for a healthy human ear is', ['20 Hz to 20 kHz', '0 to 20 Hz', '200 Hz to 200 kHz', '20 kHz to 200 kHz'])
    ],
    'physics:0-22': [
      q('Light travels fastest in', ['vacuum', 'water', 'glass', 'diamond']),
      q('The speed of light in vacuum is approximately', ['3.0×10⁸ m/s', '3.0×10⁶ m/s', '3.0×10⁵ m/s', '3.0×10¹⁰ m/s']),
      q('A ray of light entering a denser transparent medium usually', ['slows down', 'speeds up', 'stops', 'keeps the same speed in all cases']),
      q('The intensity of light from a point source varies inversely with', ['the square of distance', 'distance', 'the cube of distance', 'the square root of distance']),
      q('A light ray carries energy and travels in a', ['straight line in a uniform medium', 'circle in every medium', 'random path in vacuum', 'path that requires air'])
    ],
    'physics:0-23': [
      q('The angle of incidence equals the angle of reflection, measured from the', ['normal', 'mirror surface', 'principal axis only', 'focal point']),
      q('A plane mirror forms an image that is', ['virtual, upright and the same size as the object', 'real and inverted', 'virtual and smaller', 'real and magnified']),
      q('A concave mirror can form a real image when the object is', ['beyond its focal point', 'between the pole and focal point only', 'at the pole only', 'behind the mirror']),
      q('The principal focus of a concave mirror is the point where parallel rays', ['converge after reflection', 'diverge from before reflection', 'are absorbed', 'pass without reflection']),
      q('An object 2 m in front of a plane mirror has its image', ['2 m behind the mirror', '1 m behind the mirror', '4 m behind the mirror', 'on the mirror surface'])
    ],
    'physics:0-24': [
      q('When light travels from air into glass, it bends towards the normal because its speed', ['decreases', 'increases', 'is unchanged', 'becomes zero']),
      q('The refractive index n is given by', ['speed in vacuum divided by speed in medium', 'speed in medium divided by speed in vacuum', 'angle of refraction divided by angle of incidence', 'wavelength in vacuum times frequency squared']),
      q('The critical angle is the angle of incidence in the denser medium for which the angle of refraction is', ['90°', '0°', '45°', '180°']),
      q('Total internal reflection occurs when light travels from', ['a denser to a less dense medium at incidence above the critical angle', 'a less dense to a denser medium at any angle', 'vacuum into glass at normal incidence', 'air into water below the critical angle']),
      q('A converging lens has focal length 0.20 m. Its power is', ['+5 D', '−5 D', '+0.2 D', '−0.2 D'])
    ],
    'physics:0-25': [
      q('A simple magnifying glass is a', ['convex lens', 'concave lens', 'plane mirror', 'convex mirror']),
      q('A simple microscope produces a virtual, upright, magnified image when the object is', ['inside the focal length of a convex lens', 'beyond twice the focal length', 'at infinity', 'behind the lens']),
      q('The least distance of distinct vision for a normal adult eye is approximately', ['25 cm', '2.5 cm', '1 m', '25 m']),
      q('A telescope designed for distant objects uses an objective lens of', ['long focal length', 'zero focal length', 'shorter focal length than the eyepiece in every design', 'negative power only']),
      q('A defect corrected with a concave lens is', ['short-sightedness', 'long-sightedness', 'astigmatism only', 'colour blindness'])
    ],
    'physics:0-26': [
      q('White light is dispersed by a prism because its colours have different', ['refractive indices in glass', 'frequencies in vacuum', 'masses', 'electric charges']),
      q('In a glass prism, which visible colour is deviated most?', ['violet', 'red', 'yellow', 'green']),
      q('The colour of light with the longest visible wavelength is', ['red', 'violet', 'blue', 'green']),
      q('A primary colour of light is', ['red', 'yellow', 'brown', 'black']),
      q('Combining red, green and blue light in suitable proportions can produce', ['white light', 'black paint', 'ultraviolet only', 'infrared only'])
    ],
    'physics:0-27': [
      q('Like electric charges', ['repel each other', 'attract each other', 'have no force between them', 'always become neutral']),
      q('The SI unit of electric charge is', ['coulomb', 'ampere', 'volt', 'ohm']),
      q('An object becomes positively charged when it', ['loses electrons', 'gains electrons', 'gains neutrons', 'loses protons']),
      q('The electric field around a positive point charge is directed', ['radially outwards', 'radially inwards', 'in circles only', 'parallel to the charge']),
      q('Two identical charges are separated by distance r. If the distance is doubled, the electrostatic force becomes', ['one quarter', 'one half', 'double', 'four times'])
    ],
    'physics:0-28': [
      q('The capacitance of a capacitor is charge divided by', ['potential difference', 'current', 'resistance', 'time']),
      q('The SI unit of capacitance is the', ['farad', 'coulomb', 'henry', 'tesla']),
      q('A 4 μF capacitor is connected across 10 V. Its charge is', ['40 μC', '0.4 μC', '2.5 μC', '14 μC']),
      q('For capacitors in parallel, the equivalent capacitance is the', ['sum of their capacitances', 'reciprocal of their sum', 'smallest capacitance only', 'product divided by voltage']),
      q('Energy stored in a capacitor is', ['1/2 CV²', 'CV', 'C/V', 'V²/C'])
    ],
    'physics:0-29': [
      q('A simple cell converts', ['chemical energy into electrical energy', 'electrical energy into chemical energy only', 'heat into nuclear energy', 'light into sound']),
      q('The emf of a cell is the energy supplied per unit', ['charge', 'current', 'resistance', 'time']),
      q('If a cell of emf 1.5 V supplies 2 C of charge, the energy supplied is', ['3 J', '0.75 J', '1.5 J', '2 J']),
      q('The terminal potential difference of a cell delivering current is less than its emf because of', ['internal resistance', 'external gravity', 'magnetic poles', 'electrolysis']),
      q('Cells connected in series with the same orientation have a total emf equal to', ['the sum of their emfs', 'the product of their emfs', 'the smallest emf only', 'zero'])
    ],
    'physics:0-30': [
      q('Ohm’s law states that at constant temperature, current is proportional to', ['potential difference', 'resistance', 'charge squared', 'power']),
      q('A 12 V supply is connected across a 4 Ω resistor. The current is', ['3 A', '48 A', '8 A', '0.33 A']),
      q('The equivalent resistance of 2 Ω and 3 Ω resistors in series is', ['5 Ω', '1.2 Ω', '6 Ω', '2.5 Ω']),
      q('Two 6 Ω resistors in parallel have equivalent resistance', ['3 Ω', '12 Ω', '6 Ω', '36 Ω']),
      q('An ammeter is connected in a circuit', ['in series', 'in parallel across the supply', 'across the resistor only', 'without completing the circuit'])
    ],
    'physics:0-31': [
      q('Electrical power is given by', ['VI', 'V/I', 'I/R', 'V+I']),
      q('A 100 W lamp operates for 2 hours. The energy used is', ['0.2 kWh', '200 kWh', '50 kWh', '2 kWh']),
      q('A 2 kW heater runs for 3 hours. The energy consumed is', ['6 kWh', '0.67 kWh', '5 kWh', '6000 kWh']),
      q('The commercial unit of electrical energy is the', ['kilowatt-hour', 'watt', 'volt', 'ampere']),
      q('A 10 Ω resistor carries 2 A. Its power is', ['40 W', '20 W', '5 W', '100 W'])
    ],
    'physics:0-32': [
      q('Like magnetic poles', ['repel', 'attract', 'annihilate', 'have no interaction']),
      q('The magnetic field lines outside a bar magnet go from', ['north pole to south pole', 'south pole to north pole', 'east to west', 'the centre to both poles']),
      q('The region around a magnet where magnetic force can be detected is its', ['magnetic field', 'electric potential', 'current', 'resistance']),
      q('Soft iron is suitable for a temporary magnet because it is', ['easily magnetised and demagnetised', 'difficult to magnetise', 'non-magnetic', 'a permanent insulator']),
      q('A freely suspended bar magnet points approximately', ['north-south', 'east-west', 'vertically downward', 'towards the equator only'])
    ],
    'physics:0-33': [
      q('The force on a current-carrying conductor in a magnetic field is greatest when the current is', ['perpendicular to the field', 'parallel to the field', 'zero', 'in the same direction as gravity']),
      q('The motor effect is the force on a', ['current-carrying conductor in a magnetic field', 'stationary charge in vacuum only', 'magnet in a gravitational field', 'resistor without current']),
      q('The direction of force on a current-carrying wire can be found using', ['Fleming’s left-hand rule', 'Fleming’s right-hand rule', 'the right-hand grip rule only', 'the law of reflection']),
      q('A wire carries 3 A at right angles to a 0.2 T field over a 0.5 m length. The force is', ['0.3 N', '3.7 N', '0.03 N', '1.5 N']),
      q('If the current direction in a motor coil is reversed, the magnetic force direction', ['reverses', 'stays the same', 'becomes zero permanently', 'doubles without changing direction'])
    ],
    'physics:0-34': [
      q('Electromagnetic induction occurs when magnetic flux through a circuit', ['changes', 'is constant', 'is zero only', 'is parallel to the wire']),
      q('The direction of induced current opposes the change producing it. This is', ['Lenz’s law', 'Ohm’s law', 'Hooke’s law', 'Snell’s law']),
      q('A transformer operates using', ['electromagnetic induction', 'electrostatic induction only', 'chemical reaction', 'direct current only']),
      q('A step-up transformer has', ['more turns on the secondary coil', 'fewer turns on the secondary coil', 'equal turns always', 'no secondary coil']),
      q('An induced emf can be increased by moving a magnet through a coil', ['more rapidly', 'more slowly', 'without changing flux', 'after removing the coil'])
    ],
    'physics:0-35': [
      q('The frequency of a 50 Hz alternating supply is', ['50 cycles per second', '50 volts per second', '50 amperes', '50 seconds per cycle']),
      q('The rms value of a sinusoidal alternating voltage with peak value 100 V is approximately', ['70.7 V', '100 V', '141 V', '50 V']),
      q('A capacitor in an AC circuit offers capacitive reactance that decreases as frequency', ['increases', 'decreases', 'stays zero', 'becomes negative']),
      q('An inductor in an AC circuit opposes current because of', ['induced back emf', 'chemical action', 'friction only', 'electrolysis']),
      q('The average power in a purely resistive AC circuit is', ['Vrms Irms', 'Vpeak Ipeak × 2', 'zero', 'Vpeak/Irms'])
    ],
    'physics:0-36': [
      q('A gas conducts electricity when it is', ['ionised', 'completely neutral and un-ionised', 'frozen', 'at zero pressure only']),
      q('In a discharge tube, cathode rays consist of', ['electrons', 'protons', 'neutrons', 'positive ions only']),
      q('The minimum voltage needed to produce a spark in a gas depends strongly on', ['gas pressure and electrode separation', 'electrode colour', 'container mass', 'wire length only']),
      q('An electric discharge through a gas is due to movement of', ['electrons and ions', 'neutrons only', 'photons only', 'neutral atoms only']),
      q('A fluorescent lamp emits light when excited atoms in its gas', ['return to lower energy states', 'gain mass', 'stop moving', 'become nuclei'])
    ],
    'physics:0-37': [
      q('An alpha particle is the nucleus of', ['a helium atom', 'a hydrogen atom', 'a carbon atom', 'an electron']),
      q('The half-life of a radioactive isotope is the time taken for', ['half the unstable nuclei in a sample to decay', 'all nuclei to decay', 'the mass to double', 'the temperature to halve']),
      q('In the photoelectric effect, emission occurs when light frequency is above the metal’s', ['threshold frequency', 'resonant temperature', 'half-life', 'critical angle']),
      q('A photon has energy E equal to', ['hf', 'h/f', 'f/h', 'h+f']),
      q('Nuclear fusion is the joining of', ['light nuclei to form a heavier nucleus', 'heavy nuclei into smaller fragments', 'electrons into protons', 'molecules by sharing electrons'])
    ],
    'physics:0-38': [
      q('A semiconductor has electrical conductivity between that of a', ['conductor and an insulator', 'liquid and a gas', 'magnet and a non-magnet', 'proton and neutron']),
      q('A diode allows current to flow readily in', ['one direction', 'both directions equally', 'neither direction', 'a vacuum only']),
      q('In an n-type semiconductor, the majority charge carriers are', ['electrons', 'holes', 'protons', 'positive ions']),
      q('A transistor can be used as an electronic', ['switch or amplifier', 'transformer core only', 'permanent magnet', 'heating element only']),
      q('A rectifier converts', ['alternating current to direct current', 'direct current to sound', 'heat to mass', 'light to alternating voltage'])
    ],
    'physics:0-39': [
      q('Optical fibres guide light mainly by', ['total internal reflection', 'diffraction only', 'refraction at every point', 'polarisation']),
      q('The core of an optical fibre has a refractive index that is', ['greater than that of its cladding', 'less than that of its cladding', 'always zero', 'equal to air in every case']),
      q('A laser beam is typically', ['coherent and nearly monochromatic', 'incoherent and broad spectrum', 'made only of sound waves', 'unable to travel in a vacuum']),
      q('One advantage of optical fibre communication is', ['low signal loss and high bandwidth', 'high electrical resistance in copper', 'it requires no transmitter', 'it carries information only by heat']),
      q('For total internal reflection in an optical fibre, the incidence angle at the core-cladding boundary must exceed the', ['critical angle', 'angle of deviation', 'angle of prism', 'angle of dispersion'])
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
    'chemistry:0-1': [
      q('In the reaction 2H₂ + O₂ → 2H₂O, the mole ratio H₂:O₂ is', ['2:1', '1:2', '2:2', '1:1']),
      q('What is the relative formula mass of CO₂? (C=12, O=16)', ['44', '28', '32', '48']),
      q('How many moles are in 18 g of water? (H₂O=18)', ['1 mol', '0.5 mol', '2 mol', '18 mol']),
      q('At the same temperature and pressure, equal gas volumes contain equal numbers of molecules. This is', ['Avogadro’s law', 'Boyle’s law', 'Charles’ law', 'Graham’s law']),
      q('What mass of oxygen combines with 12 g of carbon to form CO₂? (C=12, O=16)', ['32 g', '16 g', '12 g', '44 g'])
    ],
    'chemistry:0-2': [
      q('According to kinetic theory, particles of an ideal gas are in', ['continuous random motion', 'fixed positions', 'circular paths only', 'complete rest']),
      q('At constant temperature, if a gas pressure doubles, its volume', ['halves', 'doubles', 'is unchanged', 'quadruples']),
      q('A gas occupies 300 cm³ at 100 kPa. At 150 kPa and constant temperature its volume is', ['200 cm³', '450 cm³', '150 cm³', '300 cm³']),
      q('At constant pressure, the volume of a fixed mass of gas is proportional to its', ['absolute temperature', 'Celsius temperature', 'mass only', 'pressure']),
      q('The average kinetic energy of gas molecules depends on', ['absolute temperature', 'container shape', 'gas colour', 'pressure only'])
    ],
    'chemistry:0-4': [
      q('A radioactive nuclide emits an alpha particle. Its mass number changes by', ['−4', '−2', '+4', '0']),
      q('A beta-minus emission changes a neutron into', ['a proton and an electron', 'a proton and a positron', 'two neutrons', 'an alpha particle']),
      q('The half-life of a radioactive sample is 6 hours. What fraction remains after 18 hours?', ['1/8', '1/3', '1/6', '1/2']),
      q('Which radiation is the most penetrating?', ['gamma rays', 'alpha particles', 'beta particles', 'infrared rays']),
      q('Nuclear fission is the process in which', ['a heavy nucleus splits into lighter nuclei', 'light nuclei combine', 'electrons are shared', 'an atom loses a valence electron'])
    ],
    'chemistry:0-5': [
      q('At a given temperature, a saturated solution contains', ['the maximum amount of solute that dissolves', 'no dissolved solute', 'less solute than any unsaturated solution', 'only insoluble solute']),
      q('The solubility of most solid solutes in water increases when temperature', ['increases', 'decreases', 'is reduced to zero', 'does not matter']),
      q('A solution contains 10 g of solute in 90 g of water. Its mass percentage is', ['10%', '9%', '11.1%', '90%']),
      q('Which method is suitable for obtaining pure crystals from a solution?', ['crystallisation', 'filtration alone', 'decantation', 'magnetic separation']),
      q('A solubility curve plots solubility against', ['temperature', 'time only', 'pressure only', 'volume of solvent only'])
    ],
    'chemistry:0-6': [
      q('Which gas is a major contributor to acid rain?', ['sulfur dioxide', 'oxygen', 'hydrogen', 'nitrogen']),
      q('Excess nitrate in water can cause', ['eutrophication', 'ozone formation', 'soil salinisation only', 'radioactive decay']),
      q('The main source of carbon monoxide in urban air is', ['incomplete combustion of fuels', 'photosynthesis', 'electrolysis of water', 'evaporation of rain']),
      q('Which practice helps reduce plastic pollution?', ['reuse and recycle plastic materials', 'burn plastics in the open', 'dump plastics into rivers', 'mix plastics with drinking water']),
      q('A pollutant that is not readily broken down and becomes concentrated along a food chain shows', ['biomagnification', 'neutralisation', 'distillation', 'crystallisation'])
    ],
    'chemistry:0-8': [
      q('Oxidation is defined in terms of electrons as', ['loss of electrons', 'gain of electrons', 'gain of protons', 'loss of neutrons']),
      q('In Zn + Cu²⁺ → Zn²⁺ + Cu, the reducing agent is', ['Zn', 'Cu²⁺', 'Zn²⁺', 'Cu']),
      q('What is the oxidation number of sulfur in SO₂?', ['+4', '+2', '+6', '−2']),
      q('A substance that accepts electrons is', ['reduced', 'oxidised', 'neutralised', 'hydrolysed']),
      q('In a redox reaction, oxidation and reduction', ['occur simultaneously', 'occur in separate unrelated reactions', 'both mean gain of electrons', 'do not involve electron transfer'])
    ],
    'chemistry:0-9': [
      q('During electrolysis, positive ions move towards the', ['cathode', 'anode', 'salt bridge', 'power switch']),
      q('In electrolysis of molten lead(II) bromide, the product at the cathode is', ['lead', 'bromine', 'hydrogen', 'oxygen']),
      q('The electrode where oxidation occurs is the', ['anode', 'cathode', 'electrolyte', 'voltmeter']),
      q('Which substance conducts electricity when molten because it has mobile ions?', ['sodium chloride', 'solid sugar', 'solid sulfur', 'liquid paraffin']),
      q('In aqueous copper(II) sulfate using inert electrodes, the cathode product is', ['copper', 'oxygen', 'hydrogen only', 'sulfate'])
    ],
    'chemistry:0-10': [
      q('An exothermic reaction', ['releases heat to its surroundings', 'absorbs heat from its surroundings', 'has no energy change', 'always occurs instantly']),
      q('If products have lower enthalpy than reactants, the reaction is', ['exothermic', 'endothermic', 'at equilibrium only', 'unreactive']),
      q('Breaking chemical bonds generally', ['requires energy', 'releases energy', 'has no energy effect', 'creates atoms']),
      q('A reaction absorbs 25 kJ of heat. Its heat change is', ['+25 kJ', '−25 kJ', '0 kJ', '+50 kJ']),
      q('A catalyst changes the rate of reaction by lowering the', ['activation energy', 'energy of the products only', 'mass of reactants', 'temperature of the surroundings'])
    ],
    'chemistry:0-11': [
      q('Increasing temperature usually increases reaction rate because particles', ['collide more often and with greater energy', 'become larger', 'stop moving', 'lose all kinetic energy']),
      q('A catalyst increases reaction rate by providing an alternative pathway with', ['lower activation energy', 'higher product mass', 'lower concentration', 'higher enthalpy change']),
      q('For a solid reactant, powder reacts faster than a lump because it has', ['greater exposed surface area', 'greater mass in every case', 'lower temperature', 'fewer particles']),
      q('A rate of reaction can be measured by the change in concentration per', ['unit time', 'unit volume only', 'mole of catalyst', 'degree Celsius']),
      q('Increasing the concentration of a reactant generally increases rate because', ['collision frequency increases', 'particles become heavier', 'activation energy increases', 'the reaction becomes endothermic'])
    ],
    'chemistry:0-12': [
      q('At dynamic equilibrium in a closed system, the forward and reverse reaction rates are', ['equal', 'both zero', 'always increasing', 'unrelated']),
      q('For N₂ + 3H₂ ⇌ 2NH₃, increasing pressure favours the side with', ['fewer gas molecules', 'more gas molecules', 'more solid particles', 'higher temperature only']),
      q('A catalyst added to an equilibrium mixture', ['does not change the equilibrium position', 'shifts equilibrium to products', 'shifts equilibrium to reactants', 'stops the reverse reaction']),
      q('For an exothermic forward reaction, increasing temperature shifts equilibrium', ['towards the reactants', 'towards the products', 'nowhere, and stops reaction', 'only if pressure changes']),
      q('The equilibrium constant for a given reaction changes when', ['temperature changes', 'a catalyst is added', 'concentrations change', 'pressure changes at constant temperature'])
    ],
    'chemistry:0-13': [
      q('Which oxide is acidic?', ['sulfur dioxide', 'sodium oxide', 'magnesium oxide', 'calcium oxide']),
      q('Chlorine bleaches damp litmus because it forms', ['hypochlorous acid', 'hydrochloric acid only', 'sodium chloride', 'carbonic acid']),
      q('Ammonia turns damp red litmus paper', ['blue', 'white', 'green', 'redder']),
      q('The laboratory preparation of oxygen commonly uses decomposition of hydrogen peroxide with', ['manganese(IV) oxide catalyst', 'sodium chloride', 'copper wire only', 'limewater']),
      q('Which gas turns limewater milky?', ['carbon dioxide', 'oxygen', 'hydrogen', 'nitrogen'])
    ],
    'chemistry:0-14': [
      q('Which metal is extracted from bauxite?', ['aluminium', 'iron', 'copper', 'zinc']),
      q('Rusting of iron requires', ['oxygen and water', 'nitrogen only', 'carbon dioxide only', 'dry air alone']),
      q('Which metal is commonly used to galvanise iron?', ['zinc', 'silver', 'lead', 'tin']),
      q('A more reactive metal can displace a less reactive metal from its', ['salt solution', 'oxide only in water', 'pure metal sample', 'non-metal vapour']),
      q('The chief ore of iron is', ['haematite', 'bauxite', 'cassiterite', 'galena'])
    ],
    'chemistry:0-15': [
      q('The functional group of alcohols is', ['−OH', '−COOH', '−CHO', '−NH₂']),
      q('The molecular formula of methane is', ['CH₄', 'C₂H₆', 'C₂H₄', 'CH₃OH']),
      q('Ethene decolourises bromine water because it is', ['unsaturated', 'a saturated alkane', 'an alcohol', 'an ionic compound']),
      q('Complete combustion of a hydrocarbon produces', ['carbon dioxide and water', 'carbon monoxide and hydrogen', 'carbon and oxygen', 'methane and water']),
      q('The products of esterification of an alcohol with a carboxylic acid are ester and', ['water', 'hydrogen', 'oxygen', 'carbon dioxide'])
    ],
    'chemistry:0-16': [
      q('The Haber process is used industrially to manufacture', ['ammonia', 'sulfuric acid', 'ethanol', 'sodium hydroxide']),
      q('The raw materials for the Contact process include sulfur dioxide and', ['oxygen', 'nitrogen', 'hydrogen', 'chlorine']),
      q('A catalyst used in the Haber process is finely divided', ['iron', 'copper', 'nickel', 'platinum']),
      q('The main raw material for making cement is', ['limestone', 'bauxite', 'sodium chloride', 'crude oil']),
      q('The main purpose of recycling aluminium is to', ['save energy and conserve ore resources', 'make it more radioactive', 'increase its density', 'convert it into iron'])
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
