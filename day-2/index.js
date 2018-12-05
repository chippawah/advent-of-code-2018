import checksum from './checksum'
import box_finder from './box_finder'
import { read_file } from '../util'

const input = read_file(`${__dirname}/input.txt`)

module.exports = () => {
  console.log(`\nDay 2 Solutions:\n`,
  `Part 1 Checksum Generator              ===> ${checksum(input)}\n`,
  `Part 2 Box Finder                      ===> ${box_finder(input)}\n`
  )
}
