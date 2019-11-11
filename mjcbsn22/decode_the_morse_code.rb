def decodeMorse(morseCode)
  morseCode.strip.split('   ').map{|word| 
    decodeWord(word)
  }.join(' ')
end

def decodeWord(morse)
  morse.split.map{|char| MORSE_CODE[char]}.join
end
