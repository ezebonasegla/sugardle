import fetch from 'node-fetch'
import { parse } from 'papaparse'

// export const getClient = async () => {
//
//   return await HttpService.getValueFromSettings('durl').then((response) => {
//     if(isValidResponse(response)) {
//         endpoint = response.data;
//         export const client = createClient(response.data);
//         //This is where getting error that we can not export in side the function
//       }
//     }
//   })
// }

const file =
  'https://github.com/codeforamerica/ohana-api/raw/master/data/sample-csv/phones.csv'

export async function getWords() {
  const data = await fetch(file)
    .then((response) => response.text())
    .then((v) => parse(v, { header: true, skipEmptyLines: true }))
    .then((v) => v.data)
    .catch((err) => console.log(err))

  return data
}
