/*
Confident that your list of box IDs is complete, you're ready to find the boxes full of prototype fabric.

The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second and fourth).
However, the IDs fghij and fguij differ by exactly one character, the third (h and u).
Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)
*/
export default (ids) => {
  let box_ids = []
  for (let i = 0; i < ids.length ; i++) {
    for (let k = i + 1; k < ids.length; k++) {
      const set_1 = ids[i].split('')
      const set_2 = ids[k].split('')
      const differences = []
      for (let j = 0 ; j < set_1.length ; j++) {
        if (set_1[j] !== set_2[j]) {
          differences.push(j)
        }
        if (differences.length > 1) { break }
      }
      if (differences.length === 1) {
        set_1.splice(differences[0], 1)
        return [...set_1].join('')
      }
    }
  }

}
