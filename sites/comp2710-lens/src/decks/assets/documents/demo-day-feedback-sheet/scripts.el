(--each lens-student-data
  (cl-destructuring-bind (uid name &rest) it
    (with-current-buffer (find-file "demo-day-feedback-sheet.md")
      (goto-char (point-max))
      (insert (format "# %s

## project in one sentence/phrase

\\vskip 4em

## what's the strongest part, and what's the thing which needs the most work?

\\vskip 4em

## comments on LOs

### technical quality & ambition of your artefact/performance with regards to the fundamental concepts in music computing covered in this course

\\vskip 4em

### understanding and engagement with the **design** and **performance** challenges around computer music interfaces

\\vskip 4em

### scope for collaborative ensemble interaction in your performance

\\vskip 4em

### clarity of communication in your in-class demo presentation

\\newpage

" (anu-cs-student-firstname uid))))))
