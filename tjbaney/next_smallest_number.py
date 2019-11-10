import itertools

def next_smaller(n):
    number_list = [int(i) for i in list(str(n))]
    permutations = list(itertools.permutations(number_list))
    reconstructed = [''.join([str(x) for x in p]) for p in permutations]
    reconstructed = sorted([int(x) for x in reconstructed], reverse=True)

    index_of_number = reconstructed.index(n)
    try:
        next_largest = next(i for i in reconstructed[index_of_number:len(reconstructed)] if i < n)
    except StopIteration:
        return -1

    if list(str(reconstructed)) < list(str(n)):
        return -1
    
    return next_largest