import multi_claim_finder from './multi_claim_finder'
import safe_claim_finder from './safe_claim_finder'
import { read_file } from '../util'

const input = read_file(`${__dirname}/input.txt`).map((item) => {
// const input = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'].map((item) => {
  const raw_input = item.split(' ')
  // format the id
  const raw_id = raw_input[0].split('')
  raw_id.shift()
  const id = raw_id.join('')
  // format the coordinates
  const raw_coordinates = raw_input[2].split('')
  raw_coordinates.pop()
  const coordinates = raw_coordinates.join('').split(',').map((str) => { return parseInt(str) })
  // format the area
  const area = raw_input[3].split('x').map((str) => { return parseInt(str) })
  // build the claim data
  const claim_data = { id, coordinates, area }
  return claim_data
})

export default function day_3() {
  console.log(`\nDay 3 Solutions:\n`,
  `Part 1 Multi Claim Count               ===> ${multi_claim_finder(input)}\n`,
  `Part 1 Safe Claim ID                   ===> ${safe_claim_finder(input)}\n`,
  )
}
