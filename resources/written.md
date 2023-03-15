# ASHES 2022

## 1
Time	Aug 25, 05:10
Overall evaluation	
0: (borderline paper)
While intriguing and novel, I felt the nature of the contribution and its applicability to architecture more generally were lacking and could be improved. I do, however, appreciate the discussion of CCFI in the context of RISC-V, even as I believe the importance of RISC-V is that results there can be applied broadly.
Reviewer's confidence	
3: (medium)
Confidential remarks for the program committee	This was slanting more hardware engineering that I am perfectly comfortable with which may have hurt the paper in my eyes, but even as a slight out-of-field reviewer I felt I would appreciated more specificity and detail, and personally believe the paper could be improved for that reason, though lack the expertise to rank below borderline.

## 2
Time	Aug 25, 05:02
Overall evaluation	
2: (accept)
This is well-researched, complete exploit of a major mitigation technology that is architecture agnostic. The research appears well done and the evaluation complete. I do think the contribution should be viewed in context of exploiting non-canonical addresses, which are commonly exploited at understood as a site of security threats that, and my only reservation are that this means the contributions of this paper could perhaps be considered in the context of a known weakness.
Reviewer's confidence	
4: (high)

## 3
Time	Aug 25, 04:45
Overall evaluation	
3: (strong accept)
This is a great idea with a convincing evaluation section on an important topic in the field. While I do think there's some room to argue SPECTRE should be firmly in the past at this point, the mechanism to characterize attacks could be generalized and the experimental platform extended. I was very pleased, and believe it should be published.
Reviewer's confidence	
4: (high)

# HASP 2022

## 1
Time	Sep 18, 05:13
Overall evaluation	
-1: (weak reject)
The systemization is interesting but not concise at 17 total pages. In addition, the systemization to be feels to be overfitting to existing attacks and reductionist. Table 1 for example, shows that nearly all attacks express all non-access root causes at every attack points. It feels that with, for example, determinism, modern processors which by nature exhibit determinism will always have determinism exploited by a side channel but additional by any other form of attack or intended behavior.

I feel like as a systemization of side channel attacks it is unconvincing in that regard, and feel similar analysis can be made with regards to information flow and sharing. The FSM theoretical framework, while interesting, feels underutilized after introduction throughout the remainder of the text and not strongly in support of the systemization.
Reviewer's confidence	
4: (high)
Confidential remarks for the program committee	At first glance, I overwhelming had the sense that the lines of argument present in the paper did not support a paper of this length. I don't know that I necessarily overcame that bias, but I did find throughout reading that I was more going through an enumeration of known attacks than a systemization thereof.

## 2

Time	Sep 18, 05:46
Overall evaluation	
2: (accept)
I am lean strongly to the software/simulation side so with that disclosure, I found this paper refreshingly easy to read and understand. It preceded reasonably through a clear line of thinking with no difficult leaps or unnecessary complications, and do so on complex subject matter. Well done. I believe the argument was well supported by the numerous figures, which were extremely helpful as I tried to understand the text.

I think the only weakness in my view, which was noted but not extensively discussed on in the text, is the lack of consideration for various linkage regimes between layers. It is difficult for me to assess the impact of this omission and I would've appreciated a greater discussion.

Typos:
There is a missing space between the first and second sentence of 3.1.

There is a loose "ine" in Table 1.

There is a missing space in "upto" in the second sentence of 5.3.

Accessability:
I was struggling a bit to tell the colors apart in Figure 4 (b). If possible, I would appreciate there being distinctive color *and* dotted line pattern for three spikes. I had found Figurese 1-3 much easier to see and understand.

On getting to Figure 6 (a) I noted I could tell the red and green apart more easily. This may just be a general color sensitivity issue for me.

Edits:
I suggest omitting the first sentence in 5.3 and directly going to subtitles as in other sections. This isn't a big deal but it did break up my reading a bit.
Reviewer's confidence	
3: (medium)
Confidential remarks for the program committee	While I am concerned I'm missing something obvious in this paper due to my lack of familiarity specifically with power features of digital logic, these are my only reservations with a paper I found to be a joy to read.

# RAGE 2023

## 1

Time	Mar 02, 23:51
Overall evaluation	
1: (weak accept)
I appreciated this work greatly, but was left with a sense some details were glossed over that should be relevant to consideration, and that the limited pagelength was not used strategically to communicate the specificity of the insight. I understood the work well enough at a high level, but the details were murky when I wanted the most clarity.

I believe the paper is suitable for publication, but we would benefit from some slight re-emphasis to clarify the nature of the system it is intended for, and theoretical trade-offs as well as the performance analysis. I include my specific notes below, which also contains some copy-editing comments I offer as a courtesy but do not believe should be considered reflective of any weaknesses of the paper.

"Text in all images should be larger. Fig. 3 and Fig. 4 were challenging to read even with zoom.

This would benefit from additional discussion of shadow buffers - what, how, and why. It is possible I should know this, but I do not, and I did seem to know most of the rest of the assumed knowledge.

I need additional specification/justification on the use of a pqueue in S-space. Is this just EDF within HRT and SRT sporadic requests?

A note on how hyper-period is defined in the context of a mixed periodic/sporadic system would be appreciated - I'm fairly certain it's just the periodic hyper-period with slack reserved, but it would be good to clarify.

It would be helpful to have a discussion of schedulability prior to "Note, to ensure timing correctness, any loaded sporadic request must be able to complete execution before the starting time point of the next request.". I had been assuming to this point that systems were assumed to be wildly overresourced for the sake of the developemnt of the NPRC system, but this seems not to be the case, and if that is an assumption it should be made explicit. A forward pointer to V would probably be sufficient just to organize thoughts while reading through. This is thematically linked to the use of pqueues - I'm assuming you have to use pqueues for a reason, but don't know the comparative benefit without a bit more detail or calculating floors/ceilings myself.

I do appreciate the wordchoice, I do not see the usefulness in capitalizing "Subordinate" and "Manager". I found the irregular capitalization mildly distracting, especially where "S" and "M", for example, would be sufficient. This is copy-editting comment, and in no way a concern towards the merits of the paper.

Is "8 bitfields" 8 fields of n bits, or n fields of 8 bits. I think there should just be a space or hypen there, but I'm not positive. I don't think it matters.

In V.A should "dimension of X × Y" read "dimension of _m_ × _n_"? If not, please explain the relationship between (X,Y) and (_m_,_n_).

Reading V.B it seems like priority queues may be task-wise rather than job-wise. This merits earlier discussion as well, and I makes me feel more justified in my confusion by the initial introduction of prioritization as an implementation detail in S-space. I suspect the costs are neglible in most practical systems (I'm a theoretician) but personally I would inflate the blocking time by the pqueue resolution time, or a make a note of the fact that it is neglible. There is an early not that the compute tasks run ~1000x faster than I/O - if it should be taken as a given that this is implied here, then disregard.

Another copy-edit note - I do not see the benefit of introduce the BS initialism in boldface, and found it mildly distracting. Boldface has otherwise been used for subsection headers, which are well-appreciated form of text organization!

The effective use of a GA is probably worth raising the in the introduction and abstract. It is unsuprising it does better than than heuristic but is more expensive to run, but the use here is itself a fun little insight.

Sorry more copy-editing - is it possible to convert all "BS|" instances to "BS." I keep reading "BS|Legacy" as bitwise or and I don't think "BS.Legacy" will appear unclear to any reader population.

In VI.E, WCET is used without introduction. This is probably fine given the venue.

In VI.E, Gpbs should read Gbps.

In "Experimental Setup." There is a space between the comma and zeros in 1,000 - it is denoted as "1, 000"."
Reviewer's confidence	
5: (expert)
Confidential remarks for the program committee	This went a bit outside my field but I think most of my objections should be field agnostic, and I felt confident about the aspects I had questions about. To me, it feels like strong research in a slightly sub-optimal package, and while probably meets the mark of publishable as is, would benefit greatly from enhanced clarity on details.

## 2

Time	Mar 03, 07:43
Overall evaluation	
2: (accept)
Font in images is smaller than in the text, and there appears to be room to make the image font larger. It is challenging to read x axis labels in e.g. Fig 2d even though I can figure out what they are.

It would be interesting to deconvolute lost time to miss and lost time to higher overhead in e.g. "Contended eSRAM" state. I think I can imagine a way to take those measurements. The authors convincingly speculate there's combination at play, but it seems like it could be experimentally determined in fairly short order. The additional experiment reports in "Contended Flash" and "Contended Bus" are well appreciated.

The proposed solution is quite brief and high level, but suitable given the extensive experimental work supporting its proposal. I think this paper shines in presenting a lot of results, together, with clear explanations that either make enough sense or are experimentally verified. In that sense, I find the core contribution to be the open source testing framework. If I were to recommend any changes, it be to lend this greater emphasis.

There were not too many theoretical elements in particular, but I found the notation generally clear and easy to follow, which I appreciate.

I do believe the proposed mitigation system is at least somewhat incomplete without at least some discussion of the expected costs in performance and area for a candidate implementation. Even rough floors and ceiling would strengthen the argument, especially given the context of having a lot of detail on costs of various programable changes in configuration.
Reviewer's confidence	
3: (medium)
Confidential remarks for the program committee	The level of detail in microarchitectural elements specifically related to performance is a bit outside my area of expertise, but I think I tracked along well enough. The results, as presented, are interesting a useful and I thought the framework was well defined. I found the propose mitigation unconvincing and probably would prefer its absence at its current level of development, but can also see the merits of having it as something of a discussion section after the testing framework.
