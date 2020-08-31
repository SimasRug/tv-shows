export class Utils {
    public static sortByValue(obj, val) {
        return obj.sort((a, b) =>  (a.show[val] > b.show[val]) ? 1 : -1)
     }

     public static reverse(obj, val) {
        return  this.sortByValue(obj, val).reverse()
      }
}