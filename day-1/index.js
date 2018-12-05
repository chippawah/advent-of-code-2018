import sum_arr from './sum_arr'
import first_dup_freq from './first_dup_freq'
import { read_file } from '../util'

const input = read_file(`${__dirname}/input.txt`).map((item) => {
  return parseInt(item)
})

module.exports = () => {
  console.log(`\nDay 1 Solutions:\n`,
  `Part 1 Ending Frequency                ===> ${sum_arr(input)}\n`,
  `Part 2 First Repeated Frequency        ===> ${first_dup_freq(input)}\n`
  )
}
