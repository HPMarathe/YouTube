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

# challenges of live chat

when a new comment is coming up the page is getting appended by a div.

If we keep pushing div on dom/page it will become slow.

for this you have to update the ui in efficient way & also you have to give better experience.

# complexity

- Data Layer - get data live
- UI Layer - page should not freeze even when you keep live page open for an hour.

# Data layer

if data is not live we just need to call an api in useeffect.

Two ways if data is live

## Web socket

- In this UI & server will do handshake.Once handshake is done it can quickly send data from either sides.
- Its a bidirectional live data.Data can flow from both sides.
- No regular interval.Data can come randomly.
- This will be ussed in time critical apps.
- example zerodha - while trading markets price will change within milisecs.
- eg watsapp - order matters as this is time critical apps.Order of messeges will matter.

## Long Polling/Api polling

- UI Request the server
- Data is unidirectional.
- Data flows from server to UI.
- example gmail.UI can connect every 10 secs & fetch data.
- example cricbuzz - api polling after 25 secs

# Youtube live

- For youtube we will use api polling after every 1.5 secs
- for better UX they are doing after every 1.5 secs so that it will look real time.
- There are no timestamps as order of messages does not matter in livechat.
- To check - Go to live youtube video => network => check live chat messages

# Why page is not freezing?

- because it is quickly deleting the top messages after a particular time.
- if you stay at top message youtube will not pop/delete.
- We can also change the no of messages cache according the browser.
