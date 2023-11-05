useeffect dispatch & usesearchparams also api calling
creating auth api & enabling fetching

.env should restart

Why do we need suggestions?
For a beter User Experience.

How to check on flipkart?

Network => filter fetch/XHR => Search for query => check in dev tools by searchquery

Debouncing:
typing slow = 200ms typing fast = 30ms

Perfomance:

iphone pro max = 14 letter _ 1000 Users = 140000
with debouncing= 3 API calls _ 1000 Users = 3000
Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
200ms make an API call

Cache: time complexity tro search in array = O(n) time complexity tro search in Object = O(1)

[i, ip, iph, iphone]

{ i: ip: iph: iphone: }

new Map();

Advantages
Better UX.
Performance optimization as you were making less api calls for the same result.

<!--

key - i pressed

-( because of usestate ) render the component
- useEffect()
- start timer => make API Call after 200 ms

key ip - p is pressed before 200 ms
- Unmounting - Destroys the component(useeffect return method triggered)
-( because of usestate ) re-render the component
- useEffect()
- start new timer => make API Call after 200 ms

key iph - h is pressed after 200 ms
- Destroys the component(useeffect return method triggered but timers is aldredy expired.)
-( because of usestate ) re-render the component
- useEffect()
- start new timer => make API Call after 200 ms
 -->

# Improving search sugggestions functionality

- Decreasing api calls by caching the results in redux store
- because of this whenever we are pressing back it will not make api call again as it will fetch those results from cache.

# DSA in storing cache

- Time compexity for search in array= [i,ip,iph,ipho] = 0(n)
- Time compexity for search in object/map = 0(1)
  {
  i:
  ip:
  iph:
  }

# LRU Cache

- To not bloat your store you can remove LEAST Recently used from store after a particular search count

# N level nested comments
