// https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm
//
// // Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

removeKFromList = (head, k) => {
  let li = head;
  if (!head) return head;
  if (li != null) {
    if (li.value === k) return li ? removeKFromList(li.next, k) : head;
    let prev;
    while (li && li.value !== k) {
      prev = li;
      li = li.next;
    }
    if (li && li.value === k) prev.next = li.next;
    return li ? removeKFromList(head, k) : head;
  }
};
