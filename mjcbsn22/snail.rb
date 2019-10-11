def snail(array)
  @array = array
  @used_spaces = []
  @path = []
  direction = :right
  @x, @y = 0, 0
  @used_spaces.push([@x, @y])
  @path.push(@array[@x][@y])
  
  loop do
    break if no_moves_remain?
    
    case direction
    when :right
      can_go_right? ? @y += 1 : (direction = :down; next)
    when :down
      can_go_down? ? @x += 1 : (direction = :left; next)
    when :left
      can_go_left? ? @y -= 1 : (direction = :up; next)
    when :up
      can_go_up? ? @x -= 1 : (direction = :right; next)
    end

    move
  end
  
  @path.compact
end

def can_go_right?
  @y + 1 < @array[@x].length && !@used_spaces.include?([@x, @y+1])
end

def can_go_down?
  @x + 1 < @array.length && !@used_spaces.include?([@x+1, @y])
end

def can_go_left?
  @y - 1 >= 0 && !@used_spaces.include?([@x, @y-1])
end

def can_go_up?
  @x - 1 >= 0 && !@used_spaces.include?([@x-1, @y])
end

def no_moves_remain?
  !( can_go_right? || can_go_down? || can_go_left? || can_go_up? )
end

def move
  @used_spaces.push([@x, @y])
  @path.push(@array[@x][@y])
end
