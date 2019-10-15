def anagram_counter(words):
  count = 0
  for index in range(len(words)):
    word = words.pop()
    sorted_words = list(map(lambda x: ''.join(sorted(x)), words))
    count += sorted_words.count(''.join(sorted(word)))
  
  return count
