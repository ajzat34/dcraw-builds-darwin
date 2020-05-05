wget https://www.dechifro.org/dcraw/dcraw.c
gcc dcraw.c -ljpeg -ljasper -llcms2 -o dcraw
