import { typedef, validate } from "bycontract";
import * as date from "luxon";

let today = date.DateTime.now().setLocale('br').toLocaleString()

console.log(today);