import functools

def countBits(n):
    return functools.reduce(lambda a,b : a+b, map(int, list("{0:b}".format(n))))
