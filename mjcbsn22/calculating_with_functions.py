def zero(f=None):
  return f[0](0, f[1]) if f else 0
def one(f=None):
  return f[0](1, f[1]) if f else 1
def two(f=None):
  return f[0](2, f[1]) if f else 2
def three(f=None):
  return f[0](3, f[1]) if f else 3
def four(f=None):
  return f[0](4, f[1]) if f else 4
def five(f=None):
  return f[0](5, f[1]) if f else 5
def six(f=None):
  return f[0](6, f[1]) if f else 6
def seven(f=None):
  return f[0](7, f[1]) if f else 7
def eight(f=None):
  return f[0](8, f[1]) if f else 8
def nine(f=None):
  return f[0](9, f[1]) if f else 9


def plus(r, l=None):
  if l is not None:
    return int(eval(f"{r} + {l}"))
  return plus, r
def minus(r, l=None):
  if l is not None:
    return int(eval(f"{r} - {l}"))
  return minus, r
def times(r, l=None):
  if l is not None:
    return int(eval(f"{r} * {l}"))
  return times, r
def divided_by(r, l=None):
  if l is not None:
    return int(eval(f"{r} / {l}"))
  return divided_by, r
