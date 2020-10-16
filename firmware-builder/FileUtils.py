def replace_markers_lines(sourcefile, destination, replacementMap):
    template = open(sourcefile, 'r')
    output_main = open(destination, 'w')

    for tempLine in template.readlines():
        found = False
        for replacement in replacementMap:
            if tempLine.__contains__(replacement[0]):
                output_main.write(replacement[1])
                found = True
                break
        if not found:
            output_main.write(tempLine)

    template.close()
    output_main.close()
