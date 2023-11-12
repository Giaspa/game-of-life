# Conway's Game of Life
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.

At each step in time, the following transitions occur:
 - Any **live** cell with *two or three neighbors survives*. 
 - Any **dead** cell with *three live neighbors becomes a live cell*. 
 - All other **live** cells *die in the next generation*. Similarly, all other dead cells stay
   dead.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick.

Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

## Demo link
[Game of life DEMO](http://giaspa.github.io/game-of-life)

## Usage

 1. **Choose a pattern**: you must choose an initial pattern of alive cells, by clicking on a square when the application is stopped. Ndr: clicking on the "*Star*" icon show yuo some pre-defined pattern that can be selected.
 2. **Start the game**: enjoy the cells transition by clicking on the "*Play*" icon!
 3. **(Optional) Personalize the settings**: clicking on the "*Gear*" icon, you can personalize the game assets, as "Rows", "Iterations" and "Delay".

## Tech stack

 - Angular
 - Typescript
 - Scss