import{i as Z,g as T,T as ne,d as se,h as oe,p as b,e as ct,s as z,f,j as V,m as L,k as le,u as A,a as g,l as F,v as Ee,t as ht,n as Ie,q as B,x as Be,y as xe,z as gt,A as mt,B as pt,C as H,D as I,I as ee,E as O,F as re,G as ue,H as de,J as ft,K as w,L as yt,M as vt,N as bt,O as Se,P as ce,Q as he,R as Re,S as ge,U as wt,W as me,X as pe,Y as kt,Z as xt,_ as St,$ as Nt,a0 as Ct,a1 as Tt,a2 as Dt,a3 as Ve,a4 as _t,a5 as qe,a6 as Me,a7 as Pt,a8 as At,a9 as te,aa as Lt,o as E,ab as Ne,w as _,ac as zt,c as K,ad as P,ae as J}from"./index-BPco0cCH.js";const Et=["top","bottom"],It=["start","end","left","right"];function Bt(e,a){let[i,t]=e.split(" ");return t||(t=Z(Et,i)?"start":Z(It,i)?"top":"center"),{side:Ce(i,a),align:Ce(t,a)}}function Ce(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}const Rt="/caterdokupillar-help/assets/logo-B3D7qd8J.png",Te=[{title:"Face of Eternity",author:"theasylm",rules:`Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.

Normal Japanese Sums rules apply. Colors used in this puzzle are Green, Red, Black, Yellow. For best results, remove all unshaded marking you have done once completed.

Japanese Sums rules: The squares outside the grid indicate the order of the runs of contiguous cells that must be shaded the color of the clue. The number in the square indicates the sum of the cells in the run. There must be at least one unshaded cell between runs of the same color, but that is not required for runs of different colors. All shaded runs are given. 
`,digits:"5623"},{title:"Aperitif",author:"Tallcat",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order. `,digits:"4513"},{title:"Wheels",author:"Alaric Taqi A. (Crusader175)",rules:`Normal 6x6 Sudoku rules apply.

Wheels: Digits in a grey circle have to be placed in the same circular order in the four cells that are touched by the circle. The circles might have to be rotated to the correct position by 90°, 180°, or 270°. Digits are allowed to repeat on wheels as normally allowed by other rules. 
`,digits:"3462"},{title:"Arrow Sudoku",author:"Agent",rules:`Normal 6x6 Sudoku rules apply.

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules. `,digits:"2153"},{title:"Metamorphosnipe",author:"Philip Newman",rules:`Mean Mini: Select exactly 6 digits from 1-9 and place them exactly once in every row, column and 2x3 box.

Multiplicative Arrow: The product of the digits along an arrow is equal to the number in its connected circle or pill. Digits in pills are two digit numbers read left to right or top to bottom. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"1432"},{title:"Moon-Sun Caterdokupillar ",author:"Math Pesto",rules:`Normal 6x6 Sudoku rules apply.

Draw a non-branching, non-intersecting loop that visits each box exactly once. Within each box, the loop either passes through all moons and no suns, or all suns and no moons. The loop cannot pass through the same type of clue in two consecutively used regions. 

The loop acts as a German Whispers line: Adjacent digits along the green lines must have a difference of at least 3.`,digits:"5346"},{title:"Double or Nothin'",author:"Kennet's Dad",rules:`Normal 6x6 Sudoku rules apply. 

Garden Path Lines: Blue lines are split into segments by box borders. For each line, the sum of one segment will be double the sum of the other segment.`,digits:"4615"},{title:"Caterdokupillar X-Cages",author:"kuraban",rules:`Normal 6x6 Sudoku rules apply.

BYO Killer: Draw killer cages into the grid so that each cage contains exactly one clued cell and cages don't overlap. The clued cell must end up as the left-most cell of the top row of the cage and the digit in the circle indicates the amount of cells that the cage it's in contains. Digits in killer cages cannot repeat and sum to the value in the top left of the clued cell. `,digits:"1536"},{title:"Signal Processing",author:"FullDeck and Missing a Few Cards",rules:`Normal 6x6 Sudoku rules apply.

Palindromes: The digits on a grey line read the same forwards and backwards.

Quadruples: Digits in the circles must all appear at least once in the cells touching them.`,digits:"3156"},{title:"Renban Sudoku",author:"the_cogito",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

The circles in the top left are for the next puzzle, ignore them for now.`,digits:"1425"},{title:"Sandwich Sudoku",author:"clover!",rules:`Normal 6x6 Sudoku rules apply.

Sandwich Sums: Circled digits outside this 6x6 grid indicate the sum of the digits that are placed in-between the 1 and 6 in that row or column. This includes circled digits in the previous grid. `,digits:"5361"},{title:"Cave Sudoku",author:"Piatato",rules:`Normal 6x6 Sudoku rules apply.

Cave: Shade some cells to form a cave, in such a way that all unshaded cells are orthogonally connected and all shaded cells are orthogonally connected by other shaded cells to an edge of the grid. Cells that contain a star must be unshaded, and a digit placed in such a cell indicates the total number of cells seen in all four orthogonal directions, including itself, where shaded cells obstruct vision.`,digits:"2415"},{title:"The Sky's the Limit",author:"JMoat13",rules:`Normal 6x6 Sudoku rules apply.

Counting Circles: A digit in a circle indicates exactly how many circles contain that digit.
Digits in circles outside of the grid are Skyscraper clues.

Skyscrapers: Digits in the grid represent skyscrapers, with their values corresponding to their heights. Taller skyscrapers obscure all shorter skyscrapers behind them. Clues outside the grid indicate the number of skyscrapers seen in that row/column, from the line of sight of the clue. `,digits:"4163"},{title:"Every Cage a Unique Fibonacci",author:"TwoHoleStraw",rules:`Normal 6x6 Sudoku rules apply.

Fibonacci Cages: Digits in cages cannot repeat and sum to a Fibonacci number (1, 2, 3, 5, 8, 13, 21). Each cage must sum to a different value.`,digits:"6524"},{title:"Sum or Product",author:"James Sinclair",rules:`Normal 6x6 Sudoku rules apply.

Sum or Product Cages: Digits in cages cannot repeat and either sum or multiply to the value in the top left (or possibly both).

This rule does not apply to the cage in r6c2 from the previous puzzle.`,digits:"2463"},{title:"Blueberry Crunch",author:"Tyrgannus",rules:`Normal 6x6 Sudoku rules apply.

Prime-Composite Dots: Digits separated by either shape must sum to 7 or less.
Digits separated by a circle sum to a prime number.
Digits separated by a square sum to a composite (non-prime) number.`,digits:"1364"},{title:"Grammar Nazi",author:"Chameleon",rules:`Normal 6x6 Sudoku rules apply.

Kropki Count Cages: A digit next to a white dot in the top left of a cage indicates exactly how many white Kropki dots can be placed in the cage, and a digit next to a black dot in the top left of a cage indicates exactly how many black Kropki dots can be placed in the cage, if given.
Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio.
In this puzzle a 1 adjacent to a 2 counts as both a black and a white dot.
Digits are allowed to repeat in cages as normally allowed by other rules.

For instance, a '2⬤ 0◯' clue will indicate that there are exactly 2 black dots and 0 white dots in the cage, and a '1◯' clue will indicate that there's 1 white dot and any amount of black dots.`,digits:"5126"},{title:"Counting Spring Rolls",author:"Gene",rules:`Normal 6x6 Sudoku rules apply.

Counting Circles: A digit in a circle indicates exactly how many circles contain that digit.
Digits in circles outside of the grid are Spring Roll clues.

Spring Rolls: Within the first four cells from the direction of the clue, find the highest and the lowest digit. The clue outside the grid indicates the sum of the digits that are placed in-between those two cells.`,digits:"1342"},{title:"Hint of Providence",author:"Mormagli ",rules:`Normal 6x6 Sudoku rules apply.

Entropic Lines:  Any three adjacent digits along a peach entropic line are from one each of low(1,2), medium(3,4), and high(5,6) digits. 

German Whispers Lines: Adjacent digits along the green line must have a difference of at least 3. `,digits:"6524"},{title:"Double-Booked",author:"XeonRisq",rules:`Normal 6x6 Sudoku rules apply.

Remote sums: A digit N in a cage points at one of the digits X, that is N cells away vertically or horizontally. The number given in the cage is the sum of N+X.`,digits:"1632"},{title:"Arrow Sudoku",author:"Swaroop Guggilam",rules:`Normal 6x6 Sudoku rules apply.

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"2543"},{title:"Linesweeper Sudoku",author:"Phistomefel",rules:`Normal 6x6 Sudoku rules apply.

Line Sweepers: Draw a loop into the grid that only moves orthogonally and doesn't branch or intersect itself. Loop sections may touch each other orthogonally and diagonally.
A digit in a circle indicates how many of the cells in the surrounding 3x3 area centered on the circle are visited, including the circled cell.`,digits:"6351"},{title:"Narcisse",author:"Christounet",rules:`Normal 6x6 Sudoku rules apply.

Killer Cages: Digits in cages cannot repeat and the values of all cells in the cage sum to the number in the top left.

Mirrored digits: There are 6 mirrored digits hidden in the grid, exactly one in every row, column, and box. Every digit appears in a mirrored cell exactly once. For the purpose of killer cages, a digit X in a mirrored cell will have a value of 7-X. For example, the digit 1 would have a value of 6, and vice versa. `,digits:"2546"},{title:"Region Sum Lines Sudoku",author:"Florian Wortmann",rules:`Normal 6x6 Sudoku rules apply.

Region Sum Lines: Blue lines are split into segments by box borders. Within each individual line, the sum of the digits on each segment is the same.`,digits:"3152"},{title:"Tapa Sudoku",author:"DiMono",rules:`Normal 6x6 Sudoku rules apply.

Tapa: Shade some cells so that all shaded cells form one orthogonally connected area and no 2x2 is entirely shaded. 
Red cells cannot be shaded and contain a digit indicating the length of the connected group of shaded cells in its up to 8 surrounding cells.
If adjacent cells are either both shaded or both unshaded they may not contain consecutive digits.

Shaded sums: Clues outside the grid indicate the sum of digits in shaded cells in its row or column.`,digits:"6524"},{title:"Little Killer-X Sums-Kropki Pairs Sudoku ",author:"Akash Doulani ",rules:`Normal 6x6 Sudoku rules apply.

Little Killer: Numbers outside the grid are the sum of the digits pointed to along the indicated diagonal. Digits are allowed to repeat along those diagonals as normally allowed by the other rules.

X-Sums: Digits outside the grid indicate the sum of the first X digits, where X is the digit in the closest cell to the clue.

All outside clues are both Little Killer and X-Sums.

Kropki Dots: Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.`,digits:"4312"},{title:"Entropic Whisper Sudoku",author:"thoughtbyte",rules:`Normal 6x6 Sudoku rules apply.

Entropic Lines: Any three adjacent digits along a peach entropic line are from one each of low(1,2), medium(3,4), and high(5,6) digits. 

German Whispers Lines: Adjacent digits along the green lines must have a difference of at least 3.`,digits:"2456"},{title:"Chain of Command",author:"MathGuy_12",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

N-Chains: An N-Chain is a set of N cells in a row or column that index each other in a path to form a closed loop. A pair of colored cages in a row or column indicates that there is an N-Chain of the given length that stays between the cages and includes both cages. For example,  4 in r1c1, 6 in r1c4, and 1 r1c6 form a 3 long N-chain in row 1. Blue cages show N-Chains in rows, and red cages show N-Chains in columns. Not all N-Chains are necessarily given.`,digits:"4631"},{title:"Spinners",author:"dorlir",rules:`Normal 6x6 Sudoku rules apply.

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. If two arrows are attached to the same circle, they each independently sum to the value in the circle. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"2365"},{title:"Dice Sudoku",author:"Angelo",rules:`Normal 6x6 Sudoku rules apply.

Dice Templates: The colored regions in the grid are dice templates, meaning that if they were folded into a cube, you would have one of each of the digits 1-6 and each pair of opposite sides would sum to 7.`,digits:"5614"},{title:"Waiting in the Wings",author:"BremSter",rules:`Normal 6x6 Sudoku rules apply.

Diagonal Outside: Orange digits outside the grid must be located within the first three cells seen in the direction pointed to by the arrow.`,digits:"4132"},{title:"Thread Tap&Die SET",author:"Clocksmith",rules:`Normal 6x6 Sudoku rules apply.

Palindromes: The digits on a grey line read the same forwards and backwards.`,digits:"2654"},{title:"All things equal",author:"Sktx",rules:`Normal 6x6 sudoku rules apply.

Equalines: Digits along each gold line always sum to the same number, to be determined by the solver.`,digits:"6231"},{title:"Arrow Sudoku",author:"Jobo",rules:`Normal 6x6 Sudoku rules apply. 

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"5614"},{title:"Equal Sums",author:"Chris Napolitano",rules:`Normal 6x6 Sudoku rules apply. 

Equalines: The digits on each gold line sum to the same total.`,digits:"2165"},{title:"Sum Caterpillar Trails",author:"Rangsk",rules:`Normal 6x6 Sudoku rules apply.

Region Sum Lines: Blue lines in the grid are Region Sum Lines. Lines are split into segments by box borders. Within each individual line, the sum of the digits on each segment is the same. The sum of segments on different lines may or may not be equal.`,digits:"6524"},{title:"Nameless sudoku",author:"Unknown",rules:`Normal 6x6 sudoku rules apply. 

Digits inside cages must sum to the indicated total. Digits must not repeat within cages. 

Cells marked "Bx" must see exactly x cells that match their value a chess Bishop's move away. 

Cells marked "Knx" must see exactly x cells that match their value a chess Knight's move away. 

Cells marked "Kix" must see exactly x cells that match their value a chess King's move away.`,digits:"3412"},{title:"My Phone Number",author:"Lake",rules:`Normal 6x6 sudoku rules apply.

The cage is a 'Look-And-Say' cage. The number says how many of each digit are in the cage, e.g. there is exactly 'one 5' and 'three 2s' in the cage.

This rule does not apply to the cage in the bottom left from the previous grid.`,digits:"6521"},{title:"Directional Renban",author:"Chad",rules:`Normal 6x6 sudoku rules apply.

- A cell containing an arrow is the start of a snake traveling in the indicated direction. The length of the snake is equal to the digit in the arrow's cell. A snake is a one-cell wide path of orthogonally connected cells that doesn't branch or touch itself diagonally, but may touch itself orthogonally. Snakes may not overlap with themselves or another snake.
- Each snake acts as a renban line, that being a set of consecutive non-repeating digits in any order.`,digits:"1453"},{title:"Puzzle title",author:"Logan Wall",rules:`Normal 6x6 sudoku rules apply.
Each line can be either a bulbless thermo or an entropic line. 
Digits on a bulbless thermo must strictly increase starting at one end of the line. 
Digits on an entropic line must cycle between the three 'entropy classes': low (12), mid (34), and high (56).
The solver must deduce which lines are thermos and which are entropic lines.

The bits in the top left are for the next puzzle, ignore these until that puzzle.`,digits:"3126"},{title:"Cat or Pillar",author:"Michael Lefkowitz",rules:`Normal 6x6 Sudoku rules apply.

The sum of the digits on each pillar is divisible by the digit on the cat standing on top of it. Every cat has a different digit.`,digits:"1452"},{title:"Cater-pea-lar",author:"SamuPiano",rules:`Normal 6x6 sudoku rules apply.
Split pea lines: the sum of the digits along each line strictly between two circles is equal to a concatenation of the digits in the circles, in some order. For example, 3_346_1 could be a valid split pea line, as 3+4+6=13, which is 1 concatenated with 3.`,digits:"4163"},{title:"Nameless sudoku",author:"blackjackfitz",rules:"Undefined",digits:"3254"},{title:"Hangry",author:"Nebuzaradan",rules:`Mean mini: Choose a subset of the digits 1-9, and place digits from that subset in this puzzle such that each digit appears exactly once in each row, column, and box.

X-sums: A clue outside the grid gives the sum of the first N digits in the clue's row/column from the direction of the clue, where N is the first digit from the direction of the clue.

x has the same value throughout the puzzle, to be determined by the solver.

For the purposes of the rest of the caterpillar, each digit above 6 (if any such digits appear in this puzzle) metamorphoses into a digit from 1-6 that does not appear in this puzzle. If multiple digits above 6 appear in this puzzle, they retain their relative order after metamorphosis. E.g., if the digits in this puzzle are 234589, then 8 metamorphoses into 1, and 9 into 6.
`,digits:"3546"},{title:"Counting Lines",author:"Nurator",rules:`Normal 6x6 sudoku rules apply. 
Counting lines: If a digit is on a line, that many occurrences of that digits are on that line.`,digits:"2461"},{title:"Lines of Descent",author:"BenceJoful",rules:`Normal 6x6 sudoku rules apply.

For each cell that contains an arrow, move N times in the direction of the arrow to arrive at a cell with value N-1, where N is the value of the digit in the cell with the arrow.`,digits:"5316"},{title:"I'm so hungry, I could eat...",author:"Pallando",rules:`Normal 6x6 sudoku rules apply.

Digits in circles count the number of adjacent cells (including itself) that match its parity.

Cells connected by a black dot at an edge contain a pair of values where one is twice the other.

Cells connected by a black dot at a corner contain two such diagonal pairs.`,digits:"6425"},{title:"Arrow Sum Pointers",author:"Mr.Menace",rules:`- Normal 6x6 sudoku rules apply.
- Arrow sudoku rules apply, where digits on an arrow sum to the digit in the bulb attached. Digits may repeat on an arrow if other rules allow this.
- Additionally, arrow tips point to a digit that equals the arrow sum (circled digit). The arrow sum can be one or more cells away from the arrow tip.`,digits:"4312"},{title:"Mystery Square Cages",author:"ICHTUES",rules:`Normal 6x6 sudoku rules apply.
Mystery square cages: An area surrounded by a dashed line is a cage. The digits in each cage sum to a square number, but no two cages sum to the same sqaure. Digits in a cage MAY repeat.`,digits:"4312"},{title:"Twelve Spots",author:"Marty Sears",rules:`Draw 6 lines, each with a different turquoise spot at both ends. Lines must be at least 3 cells long and may move orthogonally and diagonally. Lines may not branch, cross each other, share cells, or pass directly through 'no entry' signs.

Each line is a 'same difference' line. Every pair of adjacent cells along a line has the same difference - this is its 'difference value.' Each line has a different 'difference value'.`,digits:"2146"},{title:"tortie",author:"jneen",rules:`Normal 6x6 sudoku rules apply.

* Digits may not repeat in cages.
* Dots between cells indicate the difference in value between adjacent cells.
* Dots with >1 indicate that the adjacent cells are non-consecutive.
* The inequality sign (>) indicates the order of the adjacent cells.`,digits:"2416"},{title:"Squirmeeeeeee",author:"glum_hippo",rules:`Normal 6x6 sudoku rules apply.
Numbers outside the grid are skyscraper clues. If one imagines each cell as a building whose height equals the contained digit, then these clues indicate how many buildings can be seen from that vantage point.
Along green lines, the digits must alternate between high (4-6) and low (1-3).`,digits:"5361"},{title:"Curled Up",author:"RSP",rules:`Normal 6x6 sudoku rules apply.

Grey lines in the puzzle are modular sequence lines.
They contain digits that appear in order with a constant difference. For example: 1-3-5, 1-2-3-4, 2-2-2.

However, the digits are counted under mod 6, meaning a 7 in sequence is replaced by a 1 instead, and an 8 by a 2 and so on.
This makes the sequence 4-5-6-1-2 possible, for example.`,digits:"1234"},{title:"Battlefield sudoku",author:"Ambrose",rules:`Normal 6x6 sudoku rules apply.
Battlefield clues: Consider the first X and last Y cells of a row or column, where X is the value of the first and Y the value of the last cell. Clues outside the grid give the sum of the digits where these groups overlap, or the sum of the digits strictly between these groups when they do not overlap.`,digits:"4625"},{title:"Green and Bear It",author:"Lumos",rules:`Normal 6x6 sudoku rules apply.
On green German Whisper Lines adjacent digits must have a difference of at least 3.`,digits:"6312"},{title:"Arrow Sudoku",author:"Mitchell",rules:`Normal 6x6 sudoku rules apply.
Arrow Sudoku: The digit in a circle is the sum of the digits along the attached arrow. Digits may repeat on an arrow.`,digits:"4251"},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"Untitled",author:"Unknown",rules:"No rules provided for this puzzle. Please check the related video or website for rules."},{title:"random puzzle goes brrr",author:"playmaker6174",rules:`Normal 6x6 Sudoku rules apply.

Killer Cages:  Digits in cages cannot repeat and sum to the value in the top left.`,digits:"6251"},{title:"Arctic Moth",author:"Kinnison",rules:`Normal 6x6 Sudoku rules apply.

Slow Thermometers: Digits must not decrease along the thermometer starting from the bulb end. `,digits:"2413"},{title:"ルックエア に して くれ (Make it Look-Air)",author:"AkashG23",rules:`Normal 6x6 Sudoku rules apply.

German Whispers Lines: Adjacent digits along the green lines must have a difference of at least 3.

Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.

Look-Air:  Shade some cells such that all connected regions of shaded cells form squares. Two squares of the same size may not have a direct view of one another (i.e. have a straight line of unshaded cells in between them) but may be in the same row or column if obstructed by other shaded cells. 
The digit in a hexagon represents the number of shaded cells in the plus shape that is created by the cell itself and it's 4 orthogonal neighbors. `,digits:"5632"},{title:"Not My Vault",author:"kinoseidon",rules:`Normal 6x6 Sudoku rules apply.

Vaults: Digits in a cage may not appear in any cell orthogonally adjacent to the cage. Digits MAY repeat within a cage.

Look-and-Say: The digits xy in the top left of a cage counts the digit y appearing x times. The clue either refers to digits within the cage or digits orthogonally adjacent to the cage.
For example, a clue of '24' means that there are either exactly two 4's in the cage, or exactly two 4's orthogonally adjacent to the cage. `,digits:"6341"},{title:"Weird, Bad, Spots",author:"rockratzero",rules:`Normal 6x6 Sudoku rules apply.

Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.

Little Killer: Numbers outside the grid are the sum of the digits pointed to along the indicated diagonal, WITHIN this 6x6. Digits are allowed to repeat along those diagonals as normally allowed by the other rules.
The values of the clues abide by the Kropki Dots rules and must be deduced by the solver. `,digits:"3512"},{title:"Irrswich PLAS",author:"The Book Wyrm",rules:`Normal 6x6 sudoku rules apply.

Psycho Look-and-Say Killers: Each digit in a pink cage indexes a cell in the grid. The cell is located in the box with the digit's number, in the same position within the box as the cell containing the digit (counting boxes from left to right and top to bottom). A digit may index its own cell. The cage clue should be read as a look-and-say clue that counts the number of times a digit appears in all the indexed cells.

Irrwisch: Each time the letter A appears, it represent a different value from 1-6.`,digits:"2461"},{title:"Nurikabe Hybrid",author:"MaizeGator",rules:`Normal 6x6 Sudoku rules apply.

Nurikabe: Shade some cells blue, representing water, such that all water is orthogonally connected, but no 2x2 area is fully covered. Shade all other cells green, forming groups of orthogonally connected cells called islands.

Each island contains exactly one cage clue, and the digit in the cage indicates the size of its island. The number in the top left of a cage gives the sum of all cells on the island. The solver must deduce the shape of the islands. Digits cannot repeat within islands.`,digits:"2635"},{title:"Caterkiller",author:"Malrog",rules:`Normal 6x6 Sudoku rules apply.

Killer Lines: Along the line, digits are grouped in sections, each containing exactly one small digit clue. The digits in a section cannot repeat, and must sum to the value of the clue.`,digits:"3524"},{title:"7 Dots",author:"I Love Sleeping",rules:`Normal 6x6 Sudoku rules apply.

Parity Lines: Digits along a red parity line alternate between even and odd.

7 Dots: A digit N in a cell with a dot sums to 7 with one or more digits in the direction of the dot, starting with the Nth digit in that direction. `,digits:"6154"},{title:"Raupe Nimmersatt",author:"Palfly Kampling",rules:`Normal 6x6 Sudoku rules apply.

Remote sums: A digit N in a cage points at one of the digits Y, that is N cells away vertically or horizontally. The number given in the cage is the sum of N+Y.
In this puzzle remote sums can point exactly one cell outside the grid, making that cell an X-Sums clue.

X-Sums: Digits outside the grid indicate the sum of the first X digits, where X is the digit in the closest cell to the clue.`,digits:"1325"},{title:"Double Arrow Sudoku",author:"Jakhob and wooferzfg",rules:`Normal 6x6 Sudoku rules apply.

Double Arrows: The sum of the digits in two circles is equal to the sum of the digits on the line connecting them. Digits are allowed to repeat in the circles and on the lines as normally allowed by other rules.`,digits:"5164"},{title:"Kropkiller Sudoku",author:"Barbitos",rules:`Normal 6x6 Sudoku rules apply.

Kropki Cages: The value of a cage is the sum of the digits in it.
Cage values separated by a white dot are consecutive. 
Cages values separated by a black dot have a 1:2 ratio.
All possible dots between cages are given.`,digits:"2543"},{title:"Staircase",author:"isamook",rules:`Normal 6x6 Sudoku rules apply.

Quadruples: Digits in the circles must all appear at least once in the cells touching them.`,digits:"3261"},{title:"Slitherlink Sudoku",author:"Gliperal",rules:`Normal 6x6 Sudoku rules apply.

Slitherlink: Draw a closed loop along the grid edges that does not branch or touch itself. Cells containing the digits 1-3 indicate the amount of edges of the cell that are used by the loop. A 4 indicates that none of the edges of the cell are used by the loop, and 5 and 6 are ignored for the purpose of Slitherlink.
However, if there is a clue in the top left of the cell, the digit inside the cell is ignored and the top left clue is used instead. A ? can represent any clue from 0-3.`,digits:"6215"},{title:"Finders Sweepers",author:"fjam",rules:`Normal 6x6 Sudoku rules apply.

Parity Lines: Digits along a parity line alternate between even and odd. The positions of lines must be determined based on line length circles.

Line Length Circles: A digit in a circle indicates the length of the longest orthogonally connected parity line that can be drawn in the up to 8 cells surrounding the clue (within this 6x6). The length of the line is not amount of cells it visits but the distance the line travels (For example, a line connecting 3 cells has a length of 2).
In other words, a digit in a circle indicates the length of the longest orthogonally connected parity line that can be drawn in surrounding cells; orthogonally and diagonally adjacent cells, but not the cell itself.`,digits:"1462"},{title:"Region Sum lines Consecutive Pairs",author:"Ashish Kumar",rules:`Normal 6x6 Sudoku rules apply.

Region Sum Lines: Blue lines are split into segments by box borders. Within each individual line, the sum of the digits on each segment is the same. The sum of segments on different lines may or may not be equal.

Kropki Dots: Digits separated by a white dot are consecutive. Not all dots are necessarily given.`,digits:"1326"},{title:"A single between line",author:"superrabbit",rules:`Normal 6x6 Sudoku rules apply.

Between Lines: The digits on a between line must be strictly in-between the digits filled in the circles, excluding the digits in the circles.`,digits:"3465"},{title:"Caterpiller Split Sum Loop",author:"Virtual",rules:`Normal 6x6 Sudoku rules apply.

Remote sums loop: Draw a loop through the grid that visits each cage and does not touch itself orthogonally, but may touch diagonally. A digit N in a cage points at one of the digits X, that is N cells away along the loop in either direction. The number given in the cage is the sum of N+X.`,digits:"5621"},{title:"Hexed",author:"No-Feet McGee",rules:`Normal 6x6 Sudoku rules apply.

5-Difference German Whispers Lines: Adjacent digits along the green lines must have a difference of at least 5.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

Region Sum Lines: Blue lines are split into segments by box borders. Within each individual line, the sum of the digits on each segment is the same. The sum of segments on different lines may or may not be equal.

Palindromes: The digits on a grey line read the same forwards and backwards. `,digits:"6534"},{title:"Junction Depot",author:"Riffclown",rules:`Irregular 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and bold-outlined region.

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"2641"},{title:"For Memeristor's Insect Puzzle",author:"WISTY 'WORD SEACH' FALL",rules:`Normal 6x6 Sudoku rules apply.

Indexing Cages:  Cells in cages are both column indexers and row indexers. This means that for any cell in a cage, a digit X in rYcZ means that Z is in rYcX and Y is in rXcZ.`,digits:"6215"},{title:"Detour",author:"grkles",rules:`Normal 6x6 Sudoku rules apply.

Little Killer: Numbers outside the grid are the sum of the digits pointed to along the indicated diagonal, WITHIN this 6x6 grid. Digits are allowed to repeat along those diagonals as normally allowed by the other rules. `,digits:"4526"},{title:"Quadlibet",author:"Raumplaner",rules:`Normal 6x6 Sudoku rules apply.

Quad sums: A circle at a corner means that one of the four surrounding digits is the sum of the remaining three digits of the corner. Not all dots are necessarily given.

Kropki: Digits separated by a white dot are consecutive. Not all dots are necessarily given.`,digits:"5631"},{title:"Shyscrapers",author:"Lisztes",rules:`Normal 6x6 sudoku rules apply.

Internal Skyscrapers: Digits in the grid represent skyscrapers, with their values corresponding to their heights. Taller skyscrapers obscure all shorter skyscrapers behind them. Clues indicate the number of skyscrapers that can be seen in that row/column, from the line of sight of the clue.

HOWEVER: the clues are inside of the grid, in the cages as one-digit numbers in pairs. Horizontal cages contain the clues of the given row (the digit on the left is the left side's outside clue, the digit on the right is the right side's outside clue), vertical cages contain the clues of the given column (the top digit is the clue from above the puzzle, the bottom digit is the clue from underneath the puzzle).`,digits:"1243"},{title:"numbered clues",author:"Andrewsarchus",rules:`Normal 6x6 Sudoku rules apply.

XV Sums: Digits separated by a V must sum to 5, and digits separated by an X must sum to 10.  Not all X's and V's are necessarily given.

Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.

Even/Odd: Cells containing a grey square are even. Cells containing a grey circle are odd.

Numbered Clues: An X,V, or Kropki dot outside of the grid is placed on the edge of the Nth and (N+1)th cells from the clue, where N is the digit closest to the clue.

An Even/Odd clue outside of the grid is placed in the Nth cell from the clue where N is the digit closest to the clue.`,digits:"3456"},{title:"X-Sums Killer Sudoku",author:"KNT",rules:`Normal 6x6 Sudoku rules apply.

X-Sum Cages: Within cages, digits cannot repeat, including the individual digits placed outside the grid in the cages. For example, if you placed a 12 in an outside clue, you cannot repeat the 1 or 2 in the cage. Digits placed outside the grid in cages become an X-Sum clue. This means the digits outside the grid must be equal to the sum of the first X digits, seen from the direction of clue, where X is the first digit in that row or column. `,digits:"1362"},{title:"Renban Sudoku",author:"Sam Cappleman-Lynes",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Purple lines in the grid are Renban lines. Digits on a line form a set of non-repeating, consecutive digits in any order.`,digits:"5426"},{title:"Give Me All",author:"Toir",rules:`Normal 6x6 Sudoku rules apply.

Palindrome: Digits along the grey line read the same forwards and backwards.

Printing Lines: There are purple lines with circles and arrows attached to them in the grid. The circled digit indicates how many times digits along the line (including the circles and arrows) appear in the cells pointed at by the arrow.

For example, a line 15(3)2 is valid if the digits it points at are 2; 3; 6; 3, because the 3 appears twice, 2 appears once, and no other digits from the line appear, amounting to 3 times which is the digit in the circle.`,digits:"4563"},{title:"Black Sheep",author:"Blobz",rules:`Normal 6x6 Sudoku rules apply.

Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.`,digits:"3642"},{title:"Drawers",author:"Stephane Bura",rules:`Normal 6x6 Sudoku rules apply.

Drawers: If a cell contains an arrow, it's called an origin. The cell in the direction of the arrow at a distance equal to the origin's value is called its destination. So a drawer with a 3 in the origin will occupy exactly 3 cells, including the origin and the destination.

For a given line (row or column) and a given perpendicular direction to this line for the arrows, the destinations are a new arrangement of the origins. This means that they are the same digits, in a different order.

You can think of the arrows as drawer handles, for drawers of lengths equal to the origins' values. You pull the drawers until the destinations take the place of the origins.`,digits:"6234"},{title:"Norin",author:"thetearex15",rules:`Normal 6x6 sudoku rules apply.

Given Pencilmarks: Some pencilmarks have been given. These represent all the possible values of that cell.`,digits:"4125"},{title:"Even/odd and xv",author:"Casey",rules:`Normal 6x6 Sudoku rules apply.

XV Sums: Digits separated by a V must sum to 5, and digits separated by an X must sum to 10. 

Even/Odd: Cells containing a grey square are even. Cells containing a grey circle are odd.`,digits:"6413"},{title:"Mini Escalator",author:"Artifex_Amanda",rules:`Normal 6x6 Sudoku rules apply.

Thermometers: Digits must strictly increase along the thermometer starting from the bulb end.`,digits:"5241"},{title:"Skyscrapers",author:"Bill Murphy",rules:`Normal 6x6 Sudoku rules apply.

Skyscrapers: Digits in the grid represent skyscrapers, with their values corresponding to their heights. Taller skyscrapers obscure all shorter skyscrapers behind them. Clues outside the grid indicate the number of skyscrapers that can be seen in that row/column, from the line of sight of the clue.`,digits:"3416"},{title:"Consecutive Purpl Caterpillars",author:"Cane_Puzzles",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Purple lines in the grid are Renban lines. Digits on a line form a set of non-repeating, consecutive digits in any order.`,digits:"5463"},{title:"Cut Across",author:"Antiknight",rules:`Normal 6x6 Sudoku rules apply.

Arrows: There are circles in the grid with attached arrows. The digit in the circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules.

Greater-than Arrows: There are red arrows as well in the grid. Digits in cells in with a red arrow are larger than all other digits in the cells along the direction of the arrow. `,digits:"3652"},{title:"Six Times Tables",author:"Paws🐾",rules:`Normal 6x6 Sudoku rules apply.

Muliplication Calcudoku: The digits in the cages must multiply to the given totals. Digits CAN repeat if normally allowed by other rules.`,digits:"4352"},{title:"Geradeweg Sudoku",author:"Wessel Strijkstra/It's Stark Jr.!",rules:`Normal 6x6 Sudoku rules apply.

Geradeweg: Using orthogonal lines, draw a non-intersecting loop through the centers of some cells that passes through every grey clue. Digits on every straight line segment that touches a clue must have a sum equal to the clue's value. In case of a ?, the value of that clue must be determined. `,digits:"3621"},{title:"N-Whispers",author:"mr.mango (ndsurgenor)",rules:`Normal 6x6 Sudoku rules apply.

N-Whispers: Adjacent digits along the green lines must have a difference of at least N, where N is the number of cells the line passes through.`,digits:"6452"},{title:"Lightbulb",author:"Doziam",rules:`Normal 6x6 Sudoku rules apply.

Between Lines: The digits on a between line must be strictly in-between the digits filled in the circles, excluding the digits in the circles.`,digits:"3621"},{title:"Renban Arrow Sudoku",author:"Timberlake",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

Arrows: A digit in a circle is equal to the sum of the digits on the attached arrow. Digits are allowed to repeat along the arrows as normally allowed by other rules.`,digits:"4352"},{title:"1812 Overture",author:"starwarigami",rules:`Place the digits 0-6 exactly once in every row, column, and box.
To achieve this, each row, column, and box contains one 'Schrödinger cell' that contains 2 digits.
The cells which are shared with other grids must not be s-cells or contain 0.

Killer Cages: Digits in cages cannot repeat and sum to either 12 or 18.`,digits:"3524"},{title:"Pencilmark Sudoku",author:"jojo81",rules:`Normal 6x6 Sudoku rules apply.

Given Pencilmarks: Some pencilmarks have been given. These represent all the possible values of that cell.`,digits:"2465"},{title:"Green Stripes",author:"Emphyrio",rules:`Normal 6x6 Sudoku rules apply.

Shift Lines: Teal lines in the grid are shift lines. Each cell along one half of the line is paired with the cell at same distance from the center on the other side of the line. On one half of the line, each digit is exactly one more than the digit in the paired cell on the other half of the line. 
For instance a 4 cell long shift line could have digits 1-3-4-2 or 5-3-2-4, but not 5-3-2-6 (3 is one more than 2 but 5 isn't one more than 6).`,digits:"2315"},{title:"Optimize",author:"DadJokes",rules:`Normal 6x6 Sudoku rules apply.

Double Arrows: The sum of the digits in two circles is equal to the sum of the digits on the line connecting them. Digits are allowed to repeat in the circles and on the lines as normally allowed by other rules.`,digits:"6234"},{title:"International Travel (Border Sum Circles)",author:"99%Sneaky",rules:`Normal 6x6 Sudoku rules apply.

Border Sum Circles: Split the digits around a white circle into 2 groups of 2 along a thick box border. These two groups must have the same sum as each other, and each of the circles must have a different sum from the other circles. On the circle on the intersection of 4 boxes both vertical and horizontal pairs must be satisfied.

Anti-Border Sum Circles: Split the digits around a grey circle into 2 groups of 2 along a thick box border. These two groups must have a different sum from each other. Both horizontal and vertical pairs must be satisfied.`,digits:"4156"},{title:"Sequence Lines Sudoku",author:"Awesomesauce",rules:`Normal 6x6 Sudoku rules apply.

Sequence lines: Along a line all pairs of adjacent digits must have the same difference in the same direction (so digits can't increase and decrease on the same line).`,digits:"3412"},{title:"Butterfly Hunt",author:"Qodec",rules:`Normal 6x6 Sudoku rules apply.

Treasure hunt: A digit in a pink cell tells you how many of the 8 surrounding cells contain digits that are higher than the digit in the pink cell itself. Not all pink cells are necessarily given.`,digits:"6521"},{title:"Incomparable",author:"filuta",rules:`Normal 6x6 Sudoku rules apply.

Two orderings: Each digit is assigned a distinct letter from A-F. This gives the digits two possible orderings: numerical and alphabetical. You can note which letter is which digit in the cells underneath the grid.

Thermometers: Values must strictly increase along the thermometer starting from the bulb end, numerically or alphabetically.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive values (numerically or alphabetically) in any order.`,digits:"5146"},{title:"German Whispers Palindrome Sudoku",author:"Lizzy01",rules:`Normal 6x6 Sudoku rules apply.

German Whispers Lines: Adjacent digits along the green lines must have a difference of at least 3.

Palindromes: The digits on a grey line read the same forwards and backwards.`,digits:"2653"},{title:"Jail",author:"Memeristor's Fiancée",rules:`Normal 6x6 sudoku rules apply.
Digits in cages sum to the total given without repetition.`,digits:"2136"},{title:"Doing Rounds",author:"Clarke",rules:`Normal 6x6 sudoku rules apply.
Create a mostly orthogonal loop starting from Clarke's favourite spot in r1c6 and going counter-clockwise. 
All the lettuce and mint in the grid is along the path.
The first cell in the row or column of a lettuce that Clarke enters, he must immediately go straight to the lettuce.
Whenever Clarke enters mint, the next cell on the path is diagonally connected. All mint cells are given.
Clarke's path is made up of arrows of any length pointed in the direction of his travel (counter-clockwise). The circle of the arrow always comes immediately after the previous arrow ends and the starting cell is an arrow circle.`,digits:"6514"},{title:"String is the best part",author:"Benny",rules:`Normal 6x6 sudoku rules apply.
These are Benny's string toys! For all the toys, the digit in toy's cell is the number of digits along the attached string that are higher than the digit in the toy's cell.`,digits:"4352"},{title:"White Space",author:"Fuxia",rules:`Normal 6x6 Sudoku rules apply.

Arrow Sums: A digit in a cell with arrows is the sum of all adjacent cells in the directions of the arrows. Example: If R2C5 is a 5, then R3C4 could be a 2 and R3C6 a 3.`,digits:"3516"},{title:"Double Ambiguity",author:"Sayori",rules:`Normal 6x6 sudoku rules apply.

In THIS grid, there are six doublers, one in each row, column, and box. For the purposes of the clues, doublers double the value of a cell. Each digit from 1-6 is doubled exactly once. A doubler in r2c5 is given by the indicated grey D. This value is doubled ONLY in this grid.

Grey lines with a bulb are either arrows or thermos. Values along an arrow sum to the number in the bulb, and values along a thermo must increase from the bulb end. Solvers must determine the line type for each line. Multiple lines coming out of the same bulb may be of different type.`,digits:"2461"},{title:"Parity Party Sudoku",author:"Édouard Lebeau aka SudoKanard",rules:`Normal 6x6 sudoku rules apply.
Each number outside the grid is the sum of the first few digits in the corresponding direction, stopping at the first odd digit or the first even digit (included in the sum).`,digits:"1425"},{title:"Extra Region Skyscraper",author:"MavericksJD",rules:`Normal 6x6 sudoku rules apply.
Within Green shaded cells, each digit must appear exactly once. Cells outside the grid are Skyscraper clues which means each digit represents a skyscraper of given height. Higher skyscraper blocks the lower one. Digit outside the grid indicates no of Skyscraper visible from that direction.`,digits:"2614"},{title:"Matreshka Gusenitsa",author:"Lucian",rules:`Normal 6x6 sudoku rules apply.
Russian Doll Sums: In each row with an outside clue, there exists two digits which sum to the clue such that the digit(s) between them also sum to the clue.`,digits:"6534"},{title:"Caterdokupillar",author:"cornishjohn",rules:`Normal 6x6 sudoku rules apply.
Kropki (no neg), whispers`,digits:"2641"},{title:"Tetromino Thingy",author:"Myxo",rules:`Normal 6x6 sudoku rules apply.

Divide the grid fully into tetrominoes (ie. orthogonally connected areas of size 4). No two tetrominoes of the same shape may touch each other orthogonally, including rotations and reflections. Some tetromino borders have already been given.

Digits cannot repeat within a tetromino. The digits in each tetromino must sum to the same total.

Grey squares contain even digits.`,digits:"3562"},{title:"Mintonette Sudoku",author:"jubale",rules:`Normal 6x6 Sudoku Rules
Digits connected by the small white kropki circle are consecutive.
Mintonette Rules: Draw paths through the centers of cells connecting each large circle to exactly one other. Paths may not cross each other or themselves, and every cell must be used by a path. Numbers in circles represent the number of turns of the path that starts from that circle.
THE FINAL LINE is not unique, but the sudoku is.`,digits:"2314"},{title:"Parity Arrows",author:"mnasti2",rules:`Normal 6x6 sudoku rules apply.

A digit in a circle is the sum of either the even digits or the odd digits appearing along the attached arrow.`,digits:"3645"},{title:"Cater-cave Kropki Loop",author:"yttrio",rules:`Normal 6x6 sudoku rules apply.

Draw a one-cell-wide loop of orthogonally connected cells. The loop may not touch itself, not even diagonally.

Adjacent digits along the loop must have a Kropki relationship.  That is, they must either be consecutive or have a 2:1 ratio.

Digits in circles are on the loop, and give the total number of loop cells (including itself) in all horizontal/vertical directions combined.  Non-loop cells block the vision.

Digits in squares are NOT on the loop, and give the total number of NON-loop cells (including itself) in all horizontal/vertical directions combined.  Loop cells block the vision.`,digits:"6241"},{title:"Killer Sudoku",author:"Sotek",rules:"No rules provided for this puzzle. Please check the related video or website for rules.",digits:"4325"},{title:"Domino Effect",author:"3good5you",rules:`Regular sudoku rules apply; place the digits 1-6 in every row, column, and 2x3 box exactly once each.
Split each line fully into nonoverlapping sets of two adjacent digits. Every set along a line has the same sum; different lines may have different sums. (For example, 142341 would be a valid line, since 1+4 = 2+3 = 4+1 = 5.)
The inequality symbol points to the smaller digit of the two it connects.`,digits:"6135"},{title:"6x6 Full Rank X-Sums",author:"jonn",rules:`Normal 6x6 sudoku rules apply.

Clues outside the grid are both full rank and x-sums clues.

Full Rank: Form 9-digit sequences by reading rows from left-to-right and right-to-left, and columns from top-to-bottom and bottom-to-top (36 sequences in total.) Clues outside the grid indicate the numerical 'rank' of the 9-digit sequence it sees, read from the clue to the other end of the grid, with 1 being the lowest and 36 being the highest.

X-Sums: Clues outside the grid are the sum of the first X digits seen in the row or column from that clue where X is the first digit seen.`,digits:"4612"},{title:"Corners and Kropki",author:"KingOfArrows",rules:"Normal 6x6 sudoku rules apply.",digits:"6351"},{title:"Oh no, my circles!",author:"dumediat",rules:`Normal 6x6 sudoku rules apply.

Coordinate arrows: Digits on an arrow spell out the coordinates for the digit that is their sum. The row number is written on the start of the arrow, the column number is written on the arrow tip. If for example an arrow looks like this: -1 4-&gt; then there must be a 5 in r1c4. Each arrow must correspond to a different coordinate. Digits may repeat on an arrow if allowed by other rules. `,digits:"1432"},{title:"Wriggle Wroom",author:"Chilly",rules:`Normal 6x6 Sudoku rules apply.

Snake: shade the grid in two colours such that the first colour forms a non-branching, 1-cell wide orthogonally-connected 'snake'. The snake may not touch itself orthogonally or diagonally. No such rules apply to the second colour. The solver must determine which shading is snake and which is not.

Renban: digits on a purple renban line must be a consecutive set, but may appear in any order. Adjacent cells on a renban line must have opposite shading.

Non-consecutive: digits in cells separated by red dots must be non-consecutive. Cells separated by red dots must have opposite shading.

Magic Labyrinth Sequence: three different digits form a Magic Labyrinth (ML) set. The digits in this set are to be determined by the solver. These digits must appear in sequence in numerical order along the snake. Other digits from outside the set may appear anywhere along the snake, including before, between and after each ML digit. The head of the snake is below its tail. The ML sequence must start with its lowest digit near the head, and end with its highest digit near the tail. The start and end of the sequence do not necessarily need to coincide exactly with the head and tail.

For example, if the ML set were (in order) {2 4 6} and the remaining digits were {1 3 5} then a valid sequence along the snake could be:
5 3 *2* *4* *6* 5 1 *2* 5 1 *4* 1 *6* 1`,digits:"6351"},{title:"Even It Up",author:"sujoyku",rules:"Normal 6x6 sudoku rules apply. A digit in a circle must appear in the four surrounding cells and indicates how many even digits those four surrounding cells contain. Digits on an arrow sum to the digit in the circle from which the arrow emerges.",digits:"5214"},{title:"Multitasking",author:"Cris Moore",rules:`Normal 6x6 sudoku rules apply. The clues outside the grid are equal. They are X-sum clues, sandwich clues, and little killer clues in both directions.

That is: they are the sum of the first X digits where X is the digit adjacent to them in their row. They are also the sum of the digits between the 1 and 6 in their row. Finally, they are the sum of the diagonals drawn from them, in either direction.

Digits with a white dot between them differ by 1. `,digits:"4125"},{title:"Sudokupillar",author:"Jay Dyer",rules:"Normal 6x6 sudoku rules apply. Digits connected by a black dot are in a 1:2 ratio. The blue line is divided into four sections by region boundaries, and each section has the same sum.",digits:"1536"},{title:"Parasite",author:"AnalyticalNinja",rules:`Normal 6x6 sudoku rules apply.
Adjacent digits on the grey line must either be consecutive or have a 1:2 ratio.`,digits:"4352"},{title:"Gravitational Lensing",author:"heliopolix",rules:`- Normal 6x6 Sudoku rules apply.
- Black & White Holes: Place six black holes, one in each row, column, and box. Digits may not repeat on black holes. Place six white holes with the same rules. Place black and white holes in separate cells.
- Given digits may be black or white holes (or not).
- Black holes have zero value and white holes have double value.
- Killer Cages: Values in a cage sum to the clue in the top left corner of the cage. Digits cannot repeat in a cage (though values can). A killer cage must contain an equal number of black and white holes (the number may be zero).
- Teleporting Little Killers: Clues outside the grid with arrows are teleporting little killers. Little killers teleport from black holes to white holes with the same digit (never the other way). They can teleport one or more times (or not at all) and they never change direction.
- Any little killer must visit the same number of black and white holes (it can visit zero holes). Include all visited holes in the sum.
- Hole Sandwiches: Clues outside the grid without arrows give the sum of the digits between black and white holes in the indicated row or column (not between 1 and 9).`,digits:"1526"},{title:"Dutch Six",author:"rad",rules:"Undefined",digits:"4362"},{title:"Outies",author:"RainbowSprinklez",rules:`Normal 6x6 sudoku rules apply.
Cells separated by white Kropki Dots are consecutive. Not all dots are necessarily given.
Cells in cages sum to the clue specified.`,digits:"2156"},{title:"Kvell",author:"ZegreS",rules:"Normal 6x6 sudoku rules apply.",digits:"4521"},{title:"Sandwich",author:"RockyRoer",rules:`Normal 6x6 sudoku rules apply.

Clues outside the grid represent the sum of the digits in the cells sandwiched between the 1 and 6 in that row or column.`,digits:"2653"},{title:"Choco Banana",author:"Menderbug",rules:`Normal 6x6 Sudoku rules apply.

Choco Banana: Shade some cells such that all groups of shaded cells are rectangular and that all groups of unshaded cells are not rectangular. Adjacent cells of the same shading are in the same group. 

Circled digits indicate the size of the group they are in, whether shaded or unshaded. A group may have any number of circled digits.`,digits:"3624"},{title:"Slow to the Rub",author:"FuryfulFawful",rules:`Normal 6x6 Sudoku rules apply.

Slow Thermometers: Digits must not decrease along the thermometer starting from the bulb end.`,digits:"1562"},{title:"Primed for some math",author:"Qinlux",rules:`Normal 6x6 sudoku rules apply.
Digits orthogonal, or directly adjacent to cells with circles must sum to a prime number.
Digits diagonally touching cells with circles must also sum to a prime number.

* Note: Sums only concern digits contained entirely within the 6x6 grid, digits in adjacent grids which do not overlap do not count towards the sum.`,digits:"3451"},{title:"caterdokupillar pozl",author:"PulverizingPancake",rules:`Normal 6x6 sudoku rules apply.

Zipper Lines: Digits an equal distance from the center of a purple line must sum to the same total.`,digits:"1526"},{title:"Quiet neighbors",author:"DreamLibrarian",rules:`Normal 6x6 Sudoku rules apply.

German Whispers Lines: Adjacent digits along the green lines must have a difference of at least 3.

Kropki Dots: Digits separated by a white dot are consecutive. Not all dots are necessarily given.`,digits:"4352"},{title:"Caged Consecutives",author:"Tulrak",rules:`Normal 6x6 sudoku rules apply.
Digits in a cage may not repeat.
Digits along the pink renban line form a set of consecutive non-repeating digits in any order.`,digits:"4651"},{title:"XV-Inequality",author:"CJK",rules:"Normal 6x6 sudoku rules apply. Some inequality signs (pointing to the smaller digit) are given and some V's (indicate that the sum of the adjacent digits is 5) are given. All V's are oriented correctly.",digits:"1563"},{title:"Xternal Spikes",author:"gdc",rules:`𝗦𝘂𝗱𝗼𝗸𝘂: Normal Sudoku rules apply. Fill every cell in the grid with a digit from 1-6. Digits may not repeat in a row, column or 2x3 region.
𝗩𝗮𝗹𝘂𝗲𝘀: The value of an outside cell is the X-sum for that row/column. The value of an inside cell is the digit it contains.
𝗫-𝗦𝘂𝗺𝘀: A value of a cell outside the grid is the sum of the first X digits in the corresponding row or column, where X is the digit closest to the clue.
𝗔𝗿𝗿𝗼𝘄𝘀: Values along an arrow sum to the value in the attached circle.`,digits:"5462"},{title:"Entropic Whisperpillar",author:"Nell Gwyn",rules:`* Normal 6x6 sudoku rules apply.
* Entropic Whisper (6x6): Any two digits exactly one or two steps apart along the orange-and-white line must differ by at least two.`,digits:"4316"},{title:"XY Sandwiches",author:"Scojo",rules:`Normal 6x6 sudoku rules apply.

XY Sandwiches: Clues outside the grid give the sum of the digits between the Xth and Yth cells in that row or column, where X and Y are the first two cells seen from the direction of the clue.`,digits:"3521"},{title:"Candypillar",author:"Niverio",rules:`-Normal 6x6 Sudoku rules apply. Place the digits 1-6 into each row, column and outlined 2x3 box without repeats.
- The grid is cluttered with 4 differently coloured dots. The 4 colours represent the 4 constraints of White Kropki, Black Kropki, V and X clues. Which colour represents which constraint must be deduced by the solver. 
-The gray line is a Palindrome, where digits along a palindrome read the same forwards and backwards.`,digits:"6412"},{title:"Odd-Even Portal Sudoku",author:"Madmahogany",rules:`Normal 6x6 sudoku rules apply.

Cells with squares contain even digits. Cells with circles contain odd digits.

Additionally, squares marked in red are 'portal' cells. If a red cell in row R, column C has a value V, then the cell in row V, column R has a value C, and the cell in row C, column V has a value R. That is, if we represent the red cell as (R,C,V), then (V,R,C) and (C,V,R) also hold in the Sudoku grid.`,digits:"5136"},{title:"Group Sum",author:"Prasanna Seshadri",rules:"Normal 6x6 Sudoku rules apply. A number in a circle gives the sum of the digits in its surrounding cells.",digits:"1352"},{title:"Nameless sudoku",author:"BugsCantHide",rules:"Normal 6x6 sudoku rules apply. Green lines are standard German whisper lines (min. difference of 3).",digits:"5643"},{title:"Diagonal Skyscrapers",author:"punchingcatto",rules:`Normal 6x6 sudoku rules apply.

Additonally, each cell acts as a skyscraper of the same height as the value of the number in the cell. 

Clues outside the grid indicate the number of buildings seen in the grid along the indicated direction.

Skyscrapers block other buildings that are shorter or of the same height.`,digits:"3254"},{title:"Indexer Sudoku",author:"SSG",rules:`Normal 6x6 sudoku rules apply.

Double Indexers: The digit in a shaded cell indicates both the column in which the cell's column number appears in its row and the row in which its row number appears in its column. (i.e. if r4c6 were a 3, there would be a 6 in r4c3 and a 4 in r3c6.)`,digits:"4163"},{title:"Caterdokupillar Renban",author:"Lombax999",rules:`Normal 6x6 sudoku rules apply.

Normal renban rules apply: Pink lines contain a set of consecutive digits in any order.`,digits:"2516"},{title:"34 Degree Caterdoku",author:"Twototenth",rules:"Normal 6x6 sudoku rules apply. Each digit in columns 3 and 4 indicates the position of the 3 and 4 in the same row (that is, if row 1 column 3 is a 5, then row 1 column 5 is a 3). Along thermometers, digits increase from the bulb end.",digits:"4351"},{title:"M for Massive Clones",author:"Botaku",rules:"Normal 6x6 sudoku rules apply. The two clones contain the same digits in the same positions.",digits:"1624"},{title:"Aileron",author:"Teal",rules:`Normal 6x6 sudoku rules apply.
Box borders divide blue Region Sum lines into segments which each have the same sum. Different lines may have different sums.`,digits:"3415"},{title:"Nabner kropki sudoku",author:"arctan",rules:"Normal 6x6 sudoku rules apply. Digits separated by a black dot are in a 1 to 2 ratio. Digits on a yellow nabner line may not repeat, and may not be consecutive with any other digits on that line.",digits:"1542"},{title:"Find the Whispers",author:"randall",rules:`Normal 6x6 sudoku rules apply. Place the digits 1-6 exactly once each in every row, column, and 2x3 box.

X-Sums: Clues outside the grid are the sum of the first X digits, where X is the digit in the cell closest to the clue.
- a ? represents any valid X-Sum clue 
- >1 represents a clue greater than 1
- For each X-Sum, the set of X digits forms a German Whisper line. Consecutive digits along the line differ by at least 3.`,digits:"1643"},{title:"Crescent Moon",author:"Walker",rules:"Normal 6x6 sudoku rules apply.",digits:"6152"},{title:"German Whispers",author:"Yoshi Baroshi",rules:"Normal 6x6 sudoku rules apply. Adjacent digits along a green line differ by 3 or more. ",digits:"2634"},{title:"Sunday stroll",author:"Jonesy",rules:`Hello

Normal 6x6 Sudoku rules apply. Place the digits 1-6 exactly once in every row, column, and 2x3 box.

Killer Cages: Some cells are surrounded by dotted lines, called 'cages.' The digits in a cage sum to the value in the top left.

Draw a path that moves strictly orthogonally, starts in one circle and ends in the other circle. The path can touch itself in a 2x2 area but can not cross itself. The path must go through each box at least once.

All digits on the path inside a box will sum to the same value as the killer cage for that box. Multiple visits count toward the same sum.

The path must always go through at least one cell of the killer cage but can never go through all cells of the cage.

There is no restriction on the path in box 5.

Have fun.`,digits:"4152"},{title:"Irregular Palindrome Kropki",author:"Charlie Pugh",rules:`Normal Irregular Sudoku Rules Apply

Grey lines are palindromes and contain the same digits when read from each direction

Digits separated by a white dot must be consecutive
Digits separated by a black dot must have a ratio of 2:1
Not all possible digits are necessarily given`,digits:"6423"},{title:"Caterdokukropki",author:"myShoggoth",rules:`Normal 6x6 sudoku rules apply.

Kropki Dots: Digits separated by a white dot are consecutive. Digits separated by a black dot have a 1:2 ratio, meaning one is exactly double the other. Not all dots are necessarily given.`,digits:"5634"},{title:"Simon Says",author:"Derektionary",rules:"Normal 6x6 sudoku rules apply. Arrows are look-and-say arrows. The digit on the arrow's tip says how many times the digit in the arrow's circle appears on the diagonal cells after the arrow's tip.",digits:"4251"},{title:"Fingers",author:"Rubenscube",rules:`- Normal 6x6 sudoku rules apply.
- Along the pink renban lines, the digits form a sequence of consecutive digits in any order.
- A white dot separates two consecutive digits.`,digits:"3516"},{title:"Triangulation",author:"damasosos92",rules:"Normal 6x6 sudoku rules apply. Lines are duality lines: they act as region sum lines and modulo 3 lines at the same time.",digits:"5142"},{title:"Bait",author:"zetamath",rules:`Normal 6x6 Sudoku rules apply.

Renban Lines: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

Kropki Dots: Digits separated by a black dot have a 1:2 ratio. Not all dots are necessarily given.`,digits:"6534"},{title:"Memristor's disappointment ",author:"Donatello_86 ",rules:`Normal 6x6 sudoku rules apply.

Adjacent digits on a green line have a minimum difference of three.

Digits in dashed boxes sum to the value in the top left corner. Digits do not repeat in a dashed box.`,digits:"4612"},{title:"Productive",author:"Oddlyeven",rules:`Rules: Normal Sudoku rules apply. Put the digits 1 to 6 once each in each row, column and 2 by 3 box.
Product-Sum Lines: Digits along a line sum to the product of the digits in the squares at either end of the line. Digits may repeat on a line if permitted by the other rules.`,digits:"3465"},{title:"German Snake",author:"Oripy",rules:`Sudoku: Normal 6x6 sudoku rules apply.

Snake: Shade some cells to form a non-intersecting path which does not touch itself, not even diagonally. Black circles must lie on one end of the path. White circles must lie somewhere along the path, but not at an end.

German snake: The snake forms a German Whispers Line. Adjacent digits along the line must have a difference of at least 3.`,digits:"5341"},{title:"Parity Party",author:"Lulero",rules:`Normal 6x6 sudoku rules apply.

Digits separated by a white dot are consecutive.

A grey circle (resp. square) denotes an odd (resp. even) digit.`}],q=Symbol.for("vuetify:v-expansion-panel"),Vt=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function N(e,a,i){return T()({name:e,props:Vt({mode:i,origin:a}),setup(t,n){let{slots:s}=n;const o={onBeforeEnter(l){t.origin&&(l.style.transformOrigin=t.origin)},onLeave(l){if(t.leaveAbsolute){const{offsetTop:d,offsetLeft:c,offsetWidth:h,offsetHeight:m}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${d}px`,l.style.left=`${c}px`,l.style.width=`${h}px`,l.style.height=`${m}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:d,top:c,left:h,width:m,height:r}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=d||"",l.style.top=c||"",l.style.left=h||"",l.style.width=m||"",l.style.height=r||""}}};return()=>{const l=t.group?ne:se;return oe(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:o},s.default)}}})}function Xe(e,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return T()({name:e,props:{mode:{type:String,default:i},disabled:Boolean,group:Boolean},setup(t,n){let{slots:s}=n;const o=t.group?ne:se;return()=>oe(o,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},s.default)}})}function je(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const i=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=ct(`offset-${i}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[i]:o.style[i]}},onEnter(o){const l=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const d=`${o[t]}px`;o.style[i]="0",o.offsetHeight,o.style.transition=l.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[i]=d})},onAfterEnter:s,onEnterCancelled:s,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[i]:o.style[i]},o.style.overflow="hidden",o.style[i]=`${o[t]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[i]="0")},onAfterLeave:n,onLeaveCancelled:n};function n(o){e&&o._parent&&o._parent.classList.remove(e),s(o)}function s(o){const l=o._initialStyle[i];o.style.overflow=o._initialStyle.overflow,l!=null&&(o.style[i]=l),delete o._initialStyle}}N("fab-transition","center center","out-in");N("dialog-bottom-transition");N("dialog-top-transition");N("fade-transition");N("scale-transition");N("scroll-x-transition");N("scroll-x-reverse-transition");N("scroll-y-transition");N("scroll-y-reverse-transition");N("slide-x-transition");N("slide-x-reverse-transition");N("slide-y-transition");N("slide-y-reverse-transition");const qt=Xe("expand-transition",je());Xe("expand-x-transition",je("",!0));const Mt=b({eager:Boolean},"lazy");function Xt(e,a){const i=z(!1),t=f(()=>i.value||e.eager||a.value);V(a,()=>i.value=!0);function n(){e.eager||(i.value=!1)}return{isBooted:i,hasContent:t,onAfterLeave:n}}const We=b({...L(),...Mt()},"VExpansionPanelText"),G=T()({name:"VExpansionPanelText",props:We(),setup(e,a){let{slots:i}=a;const t=le(q);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:n,onAfterLeave:s}=Xt(e,t.isSelected);return A(()=>g(qt,{onAfterLeave:s},{default:()=>{var o;return[F(g("div",{class:["v-expansion-panel-text",e.class],style:e.style},[i.default&&n.value&&g("div",{class:"v-expansion-panel-text__wrapper"},[(o=i.default)==null?void 0:o.call(i)])]),[[Ee,t.isSelected.value]])]}})),{}}}),jt=b({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Ke=T(!1)({name:"VDefaultsProvider",props:jt(),setup(e,a){let{slots:i}=a;const{defaults:t,disabled:n,reset:s,root:o,scoped:l}=ht(e);return Ie(t,{reset:s,root:o,scoped:l,disabled:n}),()=>{var d;return(d=i.default)==null?void 0:d.call(i)}}});function Fe(e){return Be(()=>{const a=[],i={};if(e.value.background)if(xe(e.value.background)){if(i.backgroundColor=e.value.background,!e.value.text&&gt(e.value.background)){const t=mt(e.value.background);if(t.a==null||t.a===1){const n=pt(t);i.color=n,i.caretColor=n}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(xe(e.value.text)?(i.color=e.value.text,i.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:i}})}function Wt(e,a){const i=f(()=>({text:B(e)?e.value:null})),{colorClasses:t,colorStyles:n}=Fe(i);return{textColorClasses:t,textColorStyles:n}}function U(e,a){const i=f(()=>({background:B(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:n}=Fe(i);return{backgroundColorClasses:t,backgroundColorStyles:n}}const Kt=["x-small","small","default","large","x-large"],Ft=b({size:{type:[String,Number],default:"default"}},"size");function Gt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return Be(()=>{let i,t;return Z(Kt,e.size)?i=`${a}--size-${e.size}`:e.size&&(t={width:I(e.size),height:I(e.size)}),{sizeClasses:i,sizeStyles:t}})}const $t=b({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ee,...L(),...Ft(),...O({tag:"i"}),...re()},"VIcon"),Ht=T()({name:"VIcon",props:$t(),setup(e,a){let{attrs:i,slots:t}=a;const n=ue(),{themeClasses:s}=de(e),{iconData:o}=ft(f(()=>n.value||e.icon)),{sizeClasses:l}=Gt(e),{textColorClasses:d,textColorStyles:c}=Wt(w(e,"color"));return A(()=>{var r,u;const h=(r=t.default)==null?void 0:r.call(t);h&&(n.value=(u=yt(h).filter(p=>p.type===vt&&p.children&&typeof p.children=="string")[0])==null?void 0:u.children);const m=!!(i.onClick||i.onClickOnce);return g(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",s.value,l.value,d.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:I(e.size),height:I(e.size),width:I(e.size)},c.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[h]})}),{}}}),ie=Symbol("rippleStop"),Ot=80;function De(e,a){e.style.transform=a,e.style.webkitTransform=a}function ae(e){return e.constructor.name==="TouchEvent"}function Ge(e){return e.constructor.name==="KeyboardEvent"}const Ut=function(e,a){var m;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,n=0;if(!Ge(e)){const r=a.getBoundingClientRect(),u=ae(e)?e.touches[e.touches.length-1]:e;t=u.clientX-r.left,n=u.clientY-r.top}let s=0,o=.3;(m=a._ripple)!=null&&m.circle?(o=.15,s=a.clientWidth/2,s=i.center?s:s+Math.sqrt((t-s)**2+(n-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const l=`${(a.clientWidth-s*2)/2}px`,d=`${(a.clientHeight-s*2)/2}px`,c=i.center?l:`${t-s}px`,h=i.center?d:`${n-s}px`;return{radius:s,scale:o,x:c,y:h,centerX:l,centerY:d}},$={show(e,a){var u;let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((u=a==null?void 0:a._ripple)!=null&&u.enabled))return;const t=document.createElement("span"),n=document.createElement("span");t.appendChild(n),t.className="v-ripple__container",i.class&&(t.className+=` ${i.class}`);const{radius:s,scale:o,x:l,y:d,centerX:c,centerY:h}=Ut(e,a,i),m=`${s*2}px`;n.className="v-ripple__animation",n.style.width=m,n.style.height=m,a.appendChild(t);const r=window.getComputedStyle(a);r&&r.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),n.classList.add("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--visible"),De(n,`translate(${l}, ${d}) scale3d(${o},${o},${o})`),n.dataset.activated=String(performance.now()),setTimeout(()=>{n.classList.remove("v-ripple__animation--enter"),n.classList.add("v-ripple__animation--in"),De(n,`translate(${c}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const i=a[a.length-1];if(i.dataset.isHiding)return;i.dataset.isHiding="true";const t=performance.now()-Number(i.dataset.activated),n=Math.max(250-t,0);setTimeout(()=>{i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=i.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(i.parentNode)},300)},n)}};function $e(e){return typeof e>"u"||!!e}function M(e){const a={},i=e.currentTarget;if(!(!(i!=null&&i._ripple)||i._ripple.touched||e[ie])){if(e[ie]=!0,ae(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(a.center=i._ripple.centered||Ge(e),i._ripple.class&&(a.class=i._ripple.class),ae(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=()=>{$.show(e,i,a)},i._ripple.showTimer=window.setTimeout(()=>{var t;(t=i==null?void 0:i._ripple)!=null&&t.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)},Ot)}else $.show(e,i,a)}}function _e(e){e[ie]=!0}function S(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{S(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),$.hide(a)}}function He(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let X=!1;function Oe(e){!X&&(e.keyCode===Se.enter||e.keyCode===Se.space)&&(X=!0,M(e))}function Ue(e){X=!1,S(e)}function Ye(e){X&&(X=!1,S(e))}function Je(e,a,i){const{value:t,modifiers:n}=a,s=$e(t);if(s||$.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=n.center,e._ripple.circle=n.circle,bt(t)&&t.class&&(e._ripple.class=t.class),s&&!i){if(n.stop){e.addEventListener("touchstart",_e,{passive:!0}),e.addEventListener("mousedown",_e);return}e.addEventListener("touchstart",M,{passive:!0}),e.addEventListener("touchend",S,{passive:!0}),e.addEventListener("touchmove",He,{passive:!0}),e.addEventListener("touchcancel",S),e.addEventListener("mousedown",M),e.addEventListener("mouseup",S),e.addEventListener("mouseleave",S),e.addEventListener("keydown",Oe),e.addEventListener("keyup",Ue),e.addEventListener("blur",Ye),e.addEventListener("dragstart",S,{passive:!0})}else!s&&i&&Qe(e)}function Qe(e){e.removeEventListener("mousedown",M),e.removeEventListener("touchstart",M),e.removeEventListener("touchend",S),e.removeEventListener("touchmove",He),e.removeEventListener("touchcancel",S),e.removeEventListener("mouseup",S),e.removeEventListener("mouseleave",S),e.removeEventListener("keydown",Oe),e.removeEventListener("keyup",Ue),e.removeEventListener("dragstart",S),e.removeEventListener("blur",Ye)}function Yt(e,a){Je(e,a,!1)}function Jt(e){delete e._ripple,Qe(e)}function Qt(e,a){if(a.value===a.oldValue)return;const i=$e(a.oldValue);Je(e,a,i)}const Zt={mounted:Yt,unmounted:Jt,updated:Qt},Ze=b({color:String,expandIcon:{type:ee,default:"$expand"},collapseIcon:{type:ee,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...L(),...ce()},"VExpansionPanelTitle"),Pe=T()({name:"VExpansionPanelTitle",directives:{Ripple:Zt},props:Ze(),setup(e,a){let{slots:i}=a;const t=le(q);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:n,backgroundColorStyles:s}=U(e,"color"),{dimensionStyles:o}=he(e),l=f(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=f(()=>t.isSelected.value?e.collapseIcon:e.expandIcon);return A(()=>{var c;return F(g("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[s.value,o.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[g("span",{class:"v-expansion-panel-title__overlay"},null),(c=i.default)==null?void 0:c.call(i,l.value),!e.hideActions&&g(Ke,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var h;return[g("span",{class:"v-expansion-panel-title__icon"},[((h=i.actions)==null?void 0:h.call(i,l.value))??g(Ht,null,null)])]}})]),[[Re("ripple"),e.ripple]])}),{}}}),et=b({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function tt(e){return{elevationClasses:f(()=>{const i=B(e)?e.value:e.elevation,t=[];return i==null||t.push(`elevation-${i}`),t})}}const ei=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ti=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function ii(e,a){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ge("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const n=wt();me(Symbol.for(`${a.description}:id`),n);const s=le(a,null);if(!s){if(!i)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const o=w(e,"value"),l=f(()=>!!(s.disabled.value||e.disabled));s.register({id:n,value:o,disabled:l},t),pe(()=>{s.unregister(n)});const d=f(()=>s.isSelected(n)),c=f(()=>s.items.value[0].id===n),h=f(()=>s.items.value[s.items.value.length-1].id===n),m=f(()=>d.value&&[s.selectedClass.value,e.selectedClass]);return V(d,r=>{t.emit("group:selected",{value:r})},{flush:"sync"}),{id:n,isSelected:d,isFirst:c,isLast:h,toggle:()=>s.select(n,!d.value),select:r=>s.select(n,r),selectedClass:m,value:o,disabled:l,group:s}}function ai(e,a){let i=!1;const t=kt([]),n=xt(e,"modelValue",[],r=>r==null?[]:it(t,Tt(r)),r=>{const u=si(t,r);return e.multiple?u:u[0]}),s=ge("useGroup");function o(r,u){const p=r,y=Symbol.for(`${a.description}:id`),C=Dt(y,s==null?void 0:s.vnode).indexOf(u);Ve(p.value)==null&&(p.value=C,p.useIndexAsValue=!0),C>-1?t.splice(C,0,p):t.push(p)}function l(r){if(i)return;d();const u=t.findIndex(p=>p.id===r);t.splice(u,1)}function d(){const r=t.find(u=>!u.disabled);r&&e.mandatory==="force"&&!n.value.length&&(n.value=[r.id])}St(()=>{d()}),pe(()=>{i=!0}),Nt(()=>{for(let r=0;r<t.length;r++)t[r].useIndexAsValue&&(t[r].value=r)});function c(r,u){const p=t.find(y=>y.id===r);if(!(u&&(p!=null&&p.disabled)))if(e.multiple){const y=n.value.slice(),k=y.findIndex(j=>j===r),C=~k;if(u=u??!C,C&&e.mandatory&&y.length<=1||!C&&e.max!=null&&y.length+1>e.max)return;k<0&&u?y.push(r):k>=0&&!u&&y.splice(k,1),n.value=y}else{const y=n.value.includes(r);if(e.mandatory&&y)return;n.value=u??!y?[r]:[]}}function h(r){if(e.multiple,n.value.length){const u=n.value[0],p=t.findIndex(C=>C.id===u);let y=(p+r)%t.length,k=t[y];for(;k.disabled&&y!==p;)y=(y+r)%t.length,k=t[y];if(k.disabled)return;n.value=[t[y].id]}else{const u=t.find(p=>!p.disabled);u&&(n.value=[u.id])}}const m={register:o,unregister:l,selected:n,select:c,disabled:w(e,"disabled"),prev:()=>h(t.length-1),next:()=>h(1),isSelected:r=>n.value.includes(r),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:r=>ni(t,r)};return me(a,m),m}function ni(e,a){const i=it(e,[a]);return i.length?e.findIndex(t=>t.id===i[0]):-1}function it(e,a){const i=[];return a.forEach(t=>{const n=e.find(o=>Ct(t,o.value)),s=e[t];(n==null?void 0:n.value)!=null?i.push(n.id):s!=null&&i.push(s.id)}),i}function si(e,a){const i=[];return a.forEach(t=>{const n=e.findIndex(s=>s.id===t);if(~n){const s=e[n];i.push(s.value!=null?s.value:n)}}),i}const fe=b({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ye(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{roundedClasses:f(()=>{const t=B(e)?e.value:e.rounded,n=B(e)?e.value:e.tile,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const o of String(t).split(" "))s.push(`rounded-${o}`);else(n||t===!1)&&s.push("rounded-0");return s})}}const at=b({title:String,text:String,bgColor:String,...et(),...ti(),...fe(),...O(),...Ze(),...We()},"VExpansionPanel"),Ae=T()({name:"VExpansionPanel",props:at(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:i}=a;const t=ii(e,q),{backgroundColorClasses:n,backgroundColorStyles:s}=U(e,"bgColor"),{elevationClasses:o}=tt(e),{roundedClasses:l}=ye(e),d=f(()=>(t==null?void 0:t.disabled.value)||e.disabled),c=f(()=>t.group.items.value.reduce((r,u,p)=>(t.group.selected.value.includes(u.id)&&r.push(p),r),[])),h=f(()=>{const r=t.group.items.value.findIndex(u=>u.id===t.id);return!t.isSelected.value&&c.value.some(u=>u-r===1)}),m=f(()=>{const r=t.group.items.value.findIndex(u=>u.id===t.id);return!t.isSelected.value&&c.value.some(u=>u-r===-1)});return me(q,t),A(()=>{const r=!!(i.text||e.text),u=!!(i.title||e.title),p=Pe.filterProps(e),y=G.filterProps(e);return g(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":h.value,"v-expansion-panel--after-active":m.value,"v-expansion-panel--disabled":d.value},l.value,n.value,e.class],style:[s.value,e.style]},{default:()=>[g("div",{class:["v-expansion-panel__shadow",...o.value]},null),g(Ke,{defaults:{VExpansionPanelTitle:{...p},VExpansionPanelText:{...y}}},{default:()=>{var k;return[u&&g(Pe,{key:"title"},{default:()=>[i.title?i.title():e.title]}),r&&g(G,{key:"text"},{default:()=>[i.text?i.text():e.text]}),(k=i.default)==null?void 0:k.call(i)]}})]})}),{groupItem:t}}}),oi=["default","accordion","inset","popout"],li=b({flat:Boolean,...ei(),..._t(at(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...re(),...L(),...O(),variant:{type:String,default:"default",validator:e=>oi.includes(e)}},"VExpansionPanels"),ri=T()({name:"VExpansionPanels",props:li(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:i}=a;const{next:t,prev:n}=ai(e,q),{themeClasses:s}=de(e),o=f(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Ie({VExpansionPanel:{bgColor:w(e,"bgColor"),collapseIcon:w(e,"collapseIcon"),color:w(e,"color"),eager:w(e,"eager"),elevation:w(e,"elevation"),expandIcon:w(e,"expandIcon"),focusable:w(e,"focusable"),hideActions:w(e,"hideActions"),readonly:w(e,"readonly"),ripple:w(e,"ripple"),rounded:w(e,"rounded"),static:w(e,"static")}}),A(()=>g(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},s.value,o.value,e.class],style:e.style},{default:()=>{var l;return[(l=i.default)==null?void 0:l.call(i,{prev:n,next:t})]}})),{next:t,prev:n}}});function ui(e){return{aspectStyles:f(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const nt=b({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...L(),...ce()},"VResponsive"),Le=T()({name:"VResponsive",props:nt(),setup(e,a){let{slots:i}=a;const{aspectStyles:t}=ui(e),{dimensionStyles:n}=he(e);return A(()=>{var s;return g("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[n.value,e.style]},[g("div",{class:"v-responsive__sizer",style:t.value},null),(s=i.additional)==null?void 0:s.call(i),i.default&&g("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}}),di=b({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),W=(e,a)=>{let{slots:i}=a;const{transition:t,disabled:n,group:s,...o}=e,{component:l=s?ne:se,...d}=typeof t=="object"?t:{};return oe(l,qe(typeof t=="string"?{name:n?"":t}:d,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:n,group:s}).filter(c=>{let[h,m]=c;return m!==void 0})),o),i)};function ci(e,a){if(!Me)return;const i=a.modifiers||{},t=a.value,{handler:n,options:s}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var m;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const c=(m=e._observe)==null?void 0:m[a.instance.$.uid];if(!c)return;const h=l.some(r=>r.isIntersecting);n&&(!i.quiet||c.init)&&(!i.once||h||c.init)&&n(h,l,d),h&&i.once?st(e,a):c.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:o},o.observe(e)}function st(e,a){var t;const i=(t=e._observe)==null?void 0:t[a.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const hi={mounted:ci,unmounted:st},gi=b({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...nt(),...L(),...fe(),...di()},"VImg"),mi=T()({name:"VImg",directives:{intersect:hi},props:gi(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:i,slots:t}=a;const{backgroundColorClasses:n,backgroundColorStyles:s}=U(w(e,"color")),{roundedClasses:o}=ye(e),l=ge("VImg"),d=z(""),c=ue(),h=z(e.eager?"loading":"idle"),m=z(),r=z(),u=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),p=f(()=>u.value.aspect||m.value/r.value||0);V(()=>e.src,()=>{y(h.value!=="idle")}),V(p,(v,x)=>{!v&&x&&c.value&&R(c.value)}),Pt(()=>y());function y(v){if(!(e.eager&&v)&&!(Me&&!v&&!e.eager)){if(h.value="loading",u.value.lazySrc){const x=new Image;x.src=u.value.lazySrc,R(x,null)}u.value.src&&At(()=>{var x;i("loadstart",((x=c.value)==null?void 0:x.currentSrc)||u.value.src),setTimeout(()=>{var D;if(!l.isUnmounted)if((D=c.value)!=null&&D.complete){if(c.value.naturalWidth||C(),h.value==="error")return;p.value||R(c.value,null),h.value==="loading"&&k()}else p.value||R(c.value),j()})})}}function k(){var v;l.isUnmounted||(j(),R(c.value),h.value="loaded",i("load",((v=c.value)==null?void 0:v.currentSrc)||u.value.src))}function C(){var v;l.isUnmounted||(h.value="error",i("error",((v=c.value)==null?void 0:v.currentSrc)||u.value.src))}function j(){const v=c.value;v&&(d.value=v.currentSrc||v.src)}let Y=-1;pe(()=>{clearTimeout(Y)});function R(v){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const D=()=>{if(clearTimeout(Y),l.isUnmounted)return;const{naturalHeight:we,naturalWidth:ke}=v;we||ke?(m.value=ke,r.value=we):!v.complete&&h.value==="loading"&&x!=null?Y=window.setTimeout(D,x):(v.currentSrc.endsWith(".svg")||v.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,r.value=1)};D()}const ve=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ot=()=>{var D;if(!u.value.src||h.value==="idle")return null;const v=g("img",{class:["v-img__img",ve.value],style:{objectPosition:e.position},src:u.value.src,srcset:u.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:k,onError:C},null),x=(D=t.sources)==null?void 0:D.call(t);return g(W,{transition:e.transition,appear:!0},{default:()=>[F(x?g("picture",{class:"v-img__picture"},[x,v]):v,[[Ee,h.value==="loaded"]])]})},lt=()=>g(W,{transition:e.transition},{default:()=>[u.value.lazySrc&&h.value!=="loaded"&&g("img",{class:["v-img__img","v-img__img--preload",ve.value],style:{objectPosition:e.position},src:u.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),rt=()=>t.placeholder?g(W,{transition:e.transition,appear:!0},{default:()=>[(h.value==="loading"||h.value==="error"&&!t.error)&&g("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ut=()=>t.error?g(W,{transition:e.transition,appear:!0},{default:()=>[h.value==="error"&&g("div",{class:"v-img__error"},[t.error()])]}):null,dt=()=>e.gradient?g("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,be=z(!1);{const v=V(p,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{be.value=!0})}),v())})}return A(()=>{const v=Le.filterProps(e);return F(g(Le,qe({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!be.value},n.value,o.value,e.class],style:[{width:I(e.width==="auto"?m.value:e.width)},s.value,e.style]},v,{aspectRatio:p.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>g(te,null,[g(ot,null,null),g(lt,null,null),g(dt,null,null),g(rt,null,null),g(ut,null,null)]),default:t.default}),[[Re("intersect"),{handler:y,options:e.options},null,{once:!0}]])}),{currentSrc:d,image:c,state:h,naturalWidth:m,naturalHeight:r}}}),pi=b({border:[Boolean,Number,String]},"border");function fi(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{borderClasses:f(()=>{const t=B(e)?e.value:e.border,n=[];if(t===!0||t==="")n.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))n.push(`border-${s}`);return n})}}const ze={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},yi=b({location:String},"location");function vi(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Lt();return{locationStyles:f(()=>{if(!e.location)return{};const{side:s,align:o}=Bt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(c){return i?i(c):0}const d={};return s!=="center"&&(a?d[ze[s]]=`calc(100% - ${l(s)}px)`:d[s]=0),o!=="center"?a?d[ze[o]]=`calc(100% - ${l(o)}px)`:d[o]=0:(s==="center"?d.top=d.left="50%":d[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",d.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),d})}}const bi=["static","relative","fixed","absolute","sticky"],wi=b({position:{type:String,validator:e=>bi.includes(e)}},"position");function ki(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();return{positionClasses:f(()=>e.position?`${a}--${e.position}`:void 0)}}const xi=b({color:String,...pi(),...L(),...ce(),...et(),...yi(),...wi(),...fe(),...O(),...re()},"VSheet"),Q=T()({name:"VSheet",props:xi(),setup(e,a){let{slots:i}=a;const{themeClasses:t}=de(e),{backgroundColorClasses:n,backgroundColorStyles:s}=U(w(e,"color")),{borderClasses:o}=fi(e),{dimensionStyles:l}=he(e),{elevationClasses:d}=tt(e),{locationStyles:c}=vi(e),{positionClasses:h}=ki(e),{roundedClasses:m}=ye(e);return A(()=>g(e.tag,{class:["v-sheet",t.value,n.value,o.value,d.value,h.value,m.value,e.class],style:[s.value,l.value,c.value,e.style]},i)),{}}}),Si=P("h1",{class:"margin-bottom"},"Caterdokupillar Help",-1),Ni=P("p",{class:"margin-bottom"},"This document is intended to assist you in completing the Caterdokupillar. To complete the Caterdokupillar, start in the top left, and as you complete each grid, you will automatically carry 4 digits over to the next grid as givens for that puzzle. Read the rules carefully for each puzzle, as many contain variants.",-1),Ci=P("p",null,"Furthermore, if the unthinkable should happen and you get stuck on a particular puzzle, don't fret, as that's where this document comes in. It not only contains the rules for each puzzle, but most importantly, it has the digits you need for the next grid available for viewing.",-1),Ti={style:{"text-align":"center"}},Di=["innerHTML"],_i=["innerHTML"],Pi={__name:"CaterdokupillarPuzzles",setup(e){const a=ue(Te.map(()=>[0]));function i(o){const l=o.slice(0,2),d=o.slice(2,4);return`${l}<br/>${d}`}function t(o){return o.replaceAll(`
`,"<br/>")}function n(o){return`rules-${o}`}function s(o){return`digits-${o}`}return(o,l)=>(E(),Ne(te,null,[g(Q,{theme:"dark",class:"intro"},{default:_(()=>[Si,g(mi,{class:"mb-4",src:Rt}),Ni,Ci]),_:1}),g(Q,{class:"d-flex flex-wrap bg-surface-variant justify-space-between"},{default:_(()=>[(E(!0),Ne(te,null,zt(Ve(Te),(d,c)=>(E(),K(Q,{class:"ma-2 pa-2",elevation:"5",rounded:"true",key:c,"max-width":"400"},{default:_(()=>[P("div",Ti,[P("h3",null,J(c+1)+". "+J(d.title),1),P("h3",null,"by "+J(d.author),1)]),g(ri,{variant:"accordion",multiple:"",modelValue:a.value[c],"onUpdate:modelValue":h=>a.value[c]=h},{default:_(()=>[(E(),K(Ae,{key:n(c),title:"Rules"},{default:_(()=>[g(G,null,{default:_(()=>[P("div",{innerHTML:t(d.rules)},null,8,Di)]),_:2},1024)]),_:2},1024)),(E(),K(Ae,{key:s(c),title:"Digits"},{default:_(()=>[g(G,null,{default:_(()=>[P("div",{innerHTML:i(d.digits)},null,8,_i)]),_:2},1024)]),_:2},1024))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})],64))}},Li={__name:"index",setup(e){return(a,i)=>{const t=Pi;return E(),K(t)}}};export{Li as default};
