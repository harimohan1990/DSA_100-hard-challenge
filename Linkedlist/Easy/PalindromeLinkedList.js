
var isPalindrome = function(head) {
    let slow = head, fast = head,
     prev, temp
     while (fast && fast.next)
        slow = slow.next, 
        fast = fast.next.next
     prev = slow,
      slow = slow.next, 
     prev.next = null
     while (slow)
         temp = slow.next,
         slow.next = prev, prev = slow, 
         slow = temp
     fast = head, slow = prev
     while (slow)
         if (fast.val !== slow.val) return false
         else fast = fast.next, slow = slow.next
     return true
 };

 let x = isPalindrome([1,2,2,1]);
 console.log(x)