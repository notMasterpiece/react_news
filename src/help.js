/**
 * Created by grawdanin on 27.09.2017.
 */



//search

export default function searching(value) {
    return function (item) {
        return !value  || item.title.toLowerCase().includes(value.toLowerCase());
    }
}