import moment from "moment";
export default function formatToDate(date) {
  return moment(date).format("LL");
}
