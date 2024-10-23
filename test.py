import tkinter as tk
from tkinter import filedialog
import csv
from random import randint

file = open("grades.csv", 'w')

writer = csv.writer(file)

rows = [[] for _ in range(80)]
for num in range(80):
    rows[num] = [f"person{num+1}@gmail.com", randint(9, 12)]

writer.writerows(rows)

file.close()


# sakib,sksib,skibidi seminar,business seminar,cube seminar,orange seminar,cheese seminar
# skaib,skisb,orange seminar,cube seminar,business seminar,skibidi seminar,cheese seminar
# sksib,skbib,skibidi seminar,cube seminar,cheese seminar,orange seminar,business seminar
# skbib,skdib,cube seminar,orange seminar,business seminar,skibidi seminar,cheese seminar
# skeib,skaib,skibidi seminar,cube seminar,business seminar,orange seminar,cheese seminar
# sakib,sksib,skibidi seminar,business seminar,cube seminar,orange seminar,cheese seminar
# skaib,skisb,orange seminar,cube seminar,business seminar,skibidi seminar,cheese seminar
# sksib,skbib,skibidi seminar,cube seminar,cheese seminar,orange seminar,business seminar
# skbib,skdib,cube seminar,orange seminar,business seminar,skibidi seminar,cheese seminar