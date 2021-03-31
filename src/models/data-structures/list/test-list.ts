import { deepEqual } from "gtools/utils";
import { List } from "./list";

export function testList(list: List<string>, testOrder = false): void {
    list.clear();
    console.assert(list.empty);
    console.assert(list.length === 0);
    console.assert(deepEqual(list.toArray(), []));

    list.add("b");

    console.assert(!list.empty);
    console.assert(list.length === 1);

    console.assert(deepEqual(list.toArray(), ["b"]));

    console.assert(!list.contains("a"));
    console.assert(list.contains("b"));
    console.assert(!list.contains("c"));

    list.add("a");
    list.add("c");
    list.add("e");
    list.add("d");

    const tmpList = [];

    for(const item of list as any) {
        tmpList.push(item);
    }
    const listArray = list.toArray();
    console.assert(listArray.length === tmpList.length);
    tmpList.forEach((item) => {
        console.assert(listArray.indexOf(item) >= 0);
    });


    console.assert(list.length === 5);
    if (testOrder) {
        console.assert(deepEqual(list.toArray(), ["a", "b", "c", "d", "e"]));
    }

    list.remove("b");
    list.remove("d");

    console.assert(list.length === 3);
    if (testOrder) {
        console.assert(deepEqual(list.toArray(), ["a", "c", "e"]));
    }

    list.remove("a");
    list.remove("c");
    list.remove("e");

    console.assert(list.empty);
    console.assert(list.length === 0);
    console.assert(deepEqual(list.toArray(), []));
}
