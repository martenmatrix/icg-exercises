const positions = [
    2.9892058,-0.19853246,-2.754493,
    3.389206,-0.4345168,-2.754493,
    3.389206,-0.095691204,-2.4736607,
    2.9892058,-0.095691204,-2.6801507,
    2.9892058,0.19594777,-2.3544931,
    3.389206,-0.0046509504,-2.3544931,
    3.5140743,-0.09569132,-2.3544931,
    2.5892057,0.25791562,-2.3544931,
    2.5892057,-0.095691204,-2.7230148,
    2.9892058,0.3043089,-2.1267586,
    2.5892057,0.304309,-2.2690916,
    2.189206,0.16134524,-2.3544931,
    2.189206,0.30430877,-2.0324082,
    2.189206,0.32363772,-1.954493,
    2.5892057,0.4089439,-1.954493,
    2.189206,0.32363772,-1.554493,
    2.5892057,0.4089439,-1.554493,
    2.5892057,0.304309,-1.2398943,
    2.189206,0.30430877,-1.4765778,
    2.189206,0.16134524,-1.154493,
    2.5892057,0.25791562,-1.154493,
    2.5892057,-0.095691204,-0.78597116,
    2.189206,-0.095691085,-0.87431246,
    1.7892059,-0.056045413,-1.154493,
    1.7892058,-0.095691204,-1.1021755,
    2.9892058,0.3043089,-1.3822274,
    2.9892058,0.19594777,-1.154493,
    3.1147127,0.3043089,-1.554493,
    3.389206,0.16324246,-1.554493,
    3.389206,-0.0046509504,-1.154493,
    2.9892058,0.35260427,-1.554493,
    2.9892058,0.35260427,-1.954493,
    3.1147127,0.3043089,-1.954493,
    3.389206,0.16324246,-1.954493,
    3.7253342,-0.095691204,-1.954493,
    3.7253342,-0.095691204,-1.554493,
    3.789206,-0.1557759,-1.554493,
    3.789206,-0.1557759,-1.954493,
    3.789206,-0.3515514,-2.3544931,
    3.9094877,-0.49569118,-2.3544931,
    4.0776916,-0.49569118,-1.954493,
    3.789206,-0.49569118,-2.5031898,
    3.789206,-0.3515514,-1.154493,
    3.5140743,-0.09569132,-1.154493,
    4.0776916,-0.49569118,-1.554493,
    3.9094877,-0.49569118,-1.154493,
    3.789206,-0.49569118,-1.0057962,
    3.789206,-0.89569116,-0.7728869,
    4.1521907,-0.89569116,-1.154493,
    3.789206,-0.9535049,-0.754493,
    4.189206,-0.9867273,-1.154493,
    4.189206,-1.2956911,-1.0278955,
    3.8940048,-1.2956911,-0.754493,
    4.189206,-1.6956912,-1.0389161,
    3.8499684,-1.6956912,-0.754493,
    3.789206,-1.809121,-0.754493,
    4.189206,-1.9322611,-1.154493,
    4.0877194,-2.0956912,-1.154493,
    3.789206,-2.0956912,-0.8974796,
    3.789206,-2.3526845,-1.154493,
    4.189206,-2.0956912,-1.3179231,
    4.189206,-2.2112257,-1.554493,
    3.8415947,-2.4956913,-1.554493,
    3.789206,-2.4956913,-1.4482911,
    3.789206,-2.523058,-1.554493,
    3.8415947,-2.4956913,-1.954493,
    3.789206,-2.523058,-1.954493,
    3.789206,-2.4956913,-2.060695,
    3.389206,-2.6263032,-1.554493,
    3.389206,-2.6263032,-1.954493,
    2.9892058,-2.5930252,-1.554493,
    2.9892058,-2.5930252,-1.954493,
    2.9892058,-2.4956913,-1.2578386,
    3.389206,-2.4956913,-1.1932803,
    2.9892058,-2.4407544,-1.154493,
    3.389206,-2.4739819,-1.154493,
    2.9892058,-2.0956912,-0.78730285,
    3.389206,-2.0956912,-0.7718401,
    2.9892058,-2.047672,-0.754493,
    3.389206,-2.0673833,-0.754493,
    2.9892058,-1.6956912,-0.58023024,
    3.389206,-1.6956912,-0.5936003,
    2.9892058,-1.2956911,-0.49278533,
    3.389206,-1.2956911,-0.53525114,
    3.789206,-1.2956911,-0.6887611,
    3.789206,-1.6956912,-0.7210419,
    2.5892057,-1.6956912,-0.6047759,
    2.5892057,-1.2956911,-0.5088482,
    2.5892057,-0.89569116,-0.5056833,
    2.9892058,-0.89569116,-0.49869955,
    2.189206,-1.2956911,-0.53402305,
    2.189206,-0.89569116,-0.5437937,
    2.189206,-0.49569118,-0.6465272,
    2.5892057,-0.49569118,-0.59039056,
    2.189206,-0.2706778,-0.754493,
    2.5892057,-0.14435112,-0.754493,
    2.9892058,-0.19853246,-0.754493,
    2.9892058,-0.49569118,-0.5997745,
    3.389206,-0.4345168,-0.754493,
    3.389206,-0.49569118,-0.7191467,
    3.389206,-0.89569116,-0.5737784,
    3.4570694,-0.49569118,-0.754493,
    3.76192,-0.89569116,-0.754493,
    2.9892058,-0.095691204,-0.8288352,
    3.389206,-0.095691204,-1.0353253,
    1.8028336,-0.49569118,-0.754493,
    1.7892058,-0.50488853,-0.754493,
    1.7892059,-0.89569116,-0.60242105,
    1.7892059,-0.49569118,-0.75939554,
    1.3892059,-0.83664644,-0.754493,
    1.3892058,-0.49569118,-0.9799236,
    1.3892058,-0.33878553,-1.154493,
    1.7297618,-0.095691204,-1.154493,
    1.3892058,-0.15815282,-1.554493,
    1.4757774,-0.095691204,-1.554493,
    1.7892059,0.11374354,-1.554493,
    1.4757774,-0.095691204,-1.954493,
    1.7892059,0.11374354,-1.954493,
    2.1465502,0.30430877,-1.954493,
    2.1465502,0.30430877,-1.554493,
    1.3892058,-0.15815282,-1.954493,
    1.3892058,-0.33878553,-2.3544931,
    1.7297618,-0.095691204,-2.3544931,
    1.3892058,-0.49569118,-2.5290623,
    1.7892059,-0.49569118,-2.7495904,
    1.7892058,-0.095691204,-2.4068105,
    1.7892059,-0.056045413,-2.3544931,
    2.189206,-0.095691085,-2.6346736,
    1.3892059,-0.83664644,-2.754493,
    1.7892058,-0.50488853,-2.754493,
    1.1995988,-0.49569118,-2.3544931,
    0.98920584,-0.4895693,-1.954493,
    0.98920584,-0.49569118,-1.9755042,
    0.98920584,-0.692779,-2.3544931,
    0.98920584,-0.4895693,-1.554493,
    0.9822452,-0.49569118,-1.554493,
    0.9822452,-0.49569118,-1.954493,
    0.6283579,-0.89569116,-1.554493,
    0.6283579,-0.89569116,-1.954493,
    0.58920586,-0.9654953,-1.554493,
    0.58920586,-0.9654953,-1.954493,
    0.58920586,-1.2956911,-2.284689,
    0.6284175,-1.2956911,-2.3544931,
    0.8115485,-0.89569116,-2.3544931,
    0.58920586,-1.6956912,-2.284689,
    0.6284175,-1.6956912,-2.3544931,
    0.58920586,-2.025887,-1.954493,
    0.6284175,-2.0956912,-1.954493,
    0.8133254,-2.0956912,-2.3544931,
    0.98920584,-2.0956912,-2.5303736,
    0.98920584,-1.6956912,-2.7152815,
    0.98920584,-2.2715716,-2.3544931,
    1.3892058,-2.4564795,-2.3544931,
    1.3892058,-2.0956912,-2.7152815,
    1.7892059,-2.4582262,-2.3544931,
    1.7892059,-2.0956912,-2.7199602,
    1.3892058,-2.025887,-2.754493,
    1.7892059,-2.037746,-2.754493,
    1.3892058,-2.4956913,-2.284689,
    1.7892059,-2.4956913,-2.287486,
    1.3892058,-2.6108007,-1.954493,
    1.7892059,-2.612277,-1.954493,
    1.3892058,-2.6108007,-1.554493,
    1.7892059,-2.612277,-1.554493,
    1.3892058,-2.4956913,-1.224297,
    1.7892059,-2.4956913,-1.2215,
    1.3892058,-2.4564795,-1.154493,
    1.7892059,-2.4582262,-1.154493,
    1.3892058,-2.0956912,-0.7937046,
    1.7892059,-2.0956912,-0.7890258,
    0.98920584,-2.2715716,-1.154493,
    0.98920584,-2.0956912,-0.97861254,
    0.98920584,-1.6956912,-0.7937046,
    1.05901,-1.6956912,-0.754493,
    1.3892058,-2.025887,-0.754493,
    0.98920584,-1.2956911,-0.7936419,
    1.0580857,-1.2956911,-0.754493,
    0.98920584,-0.89569116,-0.96904945,
    1.3297315,-0.89569116,-0.754493,
    1.3892058,-1.2956911,-0.62473893,
    1.3892058,-0.89569116,-0.7270422,
    1.7892059,-1.2956911,-0.5594405,
    1.3892058,-1.6956912,-0.63879836,
    1.7892059,-1.6956912,-0.6125567,
    1.7892059,-2.037746,-0.754493,
    2.189206,-1.6956912,-0.619383,
    2.189206,-1.9799871,-0.754493,
    2.189206,-2.0956912,-0.8321197,
    2.5892057,-1.9916927,-0.754493,
    2.5892057,-2.0956912,-0.82748115,
    0.6284175,-1.6956912,-1.154493,
    0.6284175,-1.2956911,-1.154493,
    0.58920586,-1.6956912,-1.224297,
    0.58920586,-1.2956911,-1.224297,
    0.58920586,-2.025887,-1.554493,
    0.8133254,-2.0956912,-1.154493,
    0.6284175,-2.0956912,-1.554493,
    0.98920584,-2.4564795,-1.554493,
    0.98920584,-2.4564795,-1.954493,
    1.05901,-2.4956913,-1.554493,
    1.05901,-2.4956913,-1.954493,
    0.47409642,-1.6956912,-1.554493,
    0.47409642,-1.6956912,-1.954493,
    0.47409642,-1.2956911,-1.954493,
    0.47409642,-1.2956911,-1.554493,
    2.189206,-2.3960688,-1.154493,
    2.189206,-2.4956913,-1.3488708,
    2.5892057,-2.3925517,-1.154493,
    2.5892057,-2.4956913,-1.3632854,
    2.189206,-2.557118,-1.554493,
    2.5892057,-2.551289,-1.554493,
    2.5892057,-2.551289,-1.954493,
    2.189206,-2.557118,-1.954493,
    2.5892057,-2.4956913,-2.1457007,
    2.189206,-2.4956913,-2.1601152,
    2.189206,-2.3960688,-2.3544931,
    2.5892057,-2.3925517,-2.3544931,
    2.5892057,-2.0956912,-2.6815047,
    2.189206,-2.0956912,-2.6768663,
    2.9892058,-2.4407544,-2.3544931,
    2.9892058,-2.0956912,-2.721683,
    3.389206,-2.4739819,-2.3544931,
    3.389206,-2.0956912,-2.737146,
    2.9892058,-2.047672,-2.754493,
    3.389206,-2.0673833,-2.754493,
    3.389206,-1.6956912,-2.9153857,
    2.9892058,-1.6956912,-2.9287558,
    3.389206,-1.2956911,-2.9737349,
    2.9892058,-1.2956911,-3.0162005,
    3.389206,-0.89569116,-2.9352076,
    2.9892058,-0.89569116,-3.0102863,
    3.389206,-0.49569118,-2.7898393,
    2.9892058,-0.49569118,-2.9092116,
    3.789206,-1.6956912,-2.787944,
    3.789206,-1.2956911,-2.8202248,
    3.8499684,-1.6956912,-2.754493,
    3.8940048,-1.2956911,-2.754493,
    3.789206,-0.9535049,-2.754493,
    3.789206,-1.809121,-2.754493,
    4.189206,-1.6956912,-2.47007,
    4.189206,-1.2956911,-2.4810905,
    4.27231,-1.6956912,-2.3544931,
    4.27742,-1.2956913,-2.3544931,
    4.189206,-0.9867273,-2.3544931,
    4.189206,-1.9322611,-2.3544931,
    4.189206,-2.0956912,-2.191063,
    4.2722497,-2.0956912,-1.954493,
    4.4271855,-1.6956912,-1.954493,
    4.2722497,-2.0956912,-1.554493,
    4.4271855,-1.6956912,-1.554493,
    4.428983,-1.2956911,-1.554493,
    4.428983,-1.2956911,-1.954493,
    4.3062086,-0.89569116,-1.554493,
    4.3062086,-0.89569116,-1.954493,
    4.189206,-0.66977847,-1.554493,
    4.189206,-0.66977847,-1.954493,
    4.189206,-0.89569116,-1.2228553,
    4.27742,-1.2956913,-1.154493,
    4.27231,-1.6956912,-1.154493,
    4.189206,-2.2112257,-1.954493,
    4.0877194,-2.0956912,-2.3544931,
    2.5892057,-1.6956912,-2.90421,
    2.5892057,-1.2956911,-3.0001378,
    2.189206,-1.6956912,-2.8896031,
    2.189206,-1.2956911,-2.974963,
    2.189206,-1.9799871,-2.754493,
    2.5892057,-1.9916927,-2.754493,
    1.7892059,-1.6956912,-2.8964293,
    1.7892059,-1.2956911,-2.9495454,
    1.3892058,-1.6956912,-2.8701878,
    1.3892058,-1.2956911,-2.884247,
    1.7892059,-0.89569116,-2.906565,
    1.3892058,-0.89569116,-2.7819438,
    1.3297315,-0.89569116,-2.754493,
    1.0580857,-1.2956911,-2.754493,
    1.05901,-1.6956912,-2.754493,
    0.98920584,-1.2956911,-2.715344,
    2.9892058,-2.4956913,-2.2511475,
    3.389206,-2.4956913,-2.3157058,
    3.789206,-2.3526845,-2.3544931,
    3.789206,-2.0956912,-2.6115065,
    0.98920584,-0.89569116,-2.5399365,
    0.8115485,-0.89569116,-1.154493,
    0.98920584,-0.692779,-1.154493,
    0.98920584,-0.49569118,-1.5334818,
    1.1995988,-0.49569118,-1.154493,
    2.189206,-0.2706778,-2.754493,
    2.5892057,-0.14435112,-2.754493,
    3.4570694,-0.49569118,-2.754493,
    3.789206,-0.89569116,-2.7360992,
    3.76192,-0.89569116,-2.754493,
    4.189206,-0.89569116,-2.2861307,
    2.5892057,-0.89569116,-3.0033026,
    2.5892057,-0.49569118,-2.9185953,
    2.189206,-0.89569116,-2.9651923,
    2.189206,-0.49569118,-2.8624587,
    1.8028336,-0.49569118,-2.754493,
    4.1521907,-0.89569116,-2.3544931,
]

const indices = [
    3,2,1,0,
    5,2,3,4,
    6,2,5,
    4,3,8,7,
    10,9,4,7,
    12,10,7,11,
    14,10,12,13,
    16,14,13,15,
    18,17,16,15,
    20,17,18,19,
    22,21,20,19,
    24,22,19,23,
    26,25,17,20,
    28,27,25,26,
    29,28,26,
    25,27,30,
    27,32,31,30,
    32,9,31,
    33,32,27,28,
    35,34,33,28,
    37,34,35,36,
    38,6,34,37,
    40,39,38,37,
    39,41,38,
    36,35,43,42,
    45,44,36,42,
    46,45,42,
    48,45,46,47,
    50,48,47,49,
    52,51,50,49,
    51,52,54,53,
    56,53,54,55,
    58,57,56,55,
    57,58,59,
    61,60,57,59,
    63,62,61,59,
    62,63,64,
    66,65,62,64,
    67,65,66,
    69,66,64,68,
    71,69,68,70,
    68,73,72,70,
    72,73,75,74,
    75,77,76,74,
    76,77,79,78,
    79,81,80,78,
    81,83,82,80,
    85,84,83,81,
    80,82,87,86,
    82,89,88,87,
    87,88,91,90,
    88,93,92,91,
    92,93,95,94,
    93,97,96,95,
    97,99,98,96,
    100,99,97,89,
    102,101,99,100,
    98,104,103,96,
    99,101,98,
    105,92,94,
    91,92,105,106,
    107,91,106,
    105,108,106,
    106,108,110,109,
    108,24,112,111,
    110,108,111,
    112,114,113,111,
    115,114,112,23,
    117,116,114,115,
    119,118,117,115,
    114,116,120,113,
    116,122,121,120,
    125,124,123,121,
    122,125,121,
    125,122,126,
    11,127,125,126,
    123,124,129,128,
    123,130,121,
    121,130,132,131,
    120,121,131,
    132,130,133,
    113,120,131,134,
    131,136,135,134,
    135,136,138,137,
    137,138,140,139,
    143,142,141,140,
    138,143,140,
    141,142,145,144,
    145,148,147,146,
    144,145,146,
    148,145,150,149,
    148,149,151,
    149,153,152,151,
    153,155,154,152,
    157,155,153,156,
    154,159,158,152,
    158,159,161,160,
    160,161,163,162,
    163,165,164,162,
    164,165,167,166,
    167,169,168,166,
    166,168,171,170,
    174,173,172,171,
    168,174,171,
    173,176,175,172,
    176,178,177,175,
    180,178,176,179,
    181,107,180,179,
    183,181,179,182,
    184,183,182,174,
    186,185,183,184,
    169,187,186,184,
    187,189,188,186,
    188,86,185,186,
    185,90,181,183,
    179,176,173,182,
    175,191,190,172,
    190,191,193,192,
    195,190,192,194,
    196,195,194,
    195,196,197,170,
    196,147,198,197,
    198,200,199,197,
    192,201,194,
    201,202,146,194,
    204,203,202,201,
    193,204,201,192,
    204,193,139,
    182,173,174,
    172,190,195,171,
    165,206,205,167,
    206,208,207,205,
    210,208,206,209,
    212,211,210,209,
    214,213,211,212,
    216,213,214,215,
    218,217,216,215,
    217,220,219,216,
    220,222,221,219,
    224,222,220,223,
    226,225,224,223,
    228,227,225,226,
    230,229,227,228,
    232,231,229,230,
    227,234,233,225,
    234,236,235,233,
    236,234,237,
    233,235,238,
    235,236,240,239,
    240,242,241,239,
    242,240,243,
    239,241,244,
    247,246,245,244,
    241,247,244,
    246,247,249,248,
    247,251,250,249,
    251,253,252,250,
    252,253,255,254,
    256,252,254,
    255,40,44,254,
    250,252,256,50,
    257,250,50,
    249,250,257,258,
    259,246,248,61,
    248,249,258,56,
    60,248,56,
    245,260,244,
    241,242,251,247,
    262,228,226,261,
    264,262,261,263,
    263,261,266,265,
    267,263,265,157,
    268,264,263,267,
    270,268,267,269,
    272,271,268,270,
    274,273,272,270,
    272,273,128,
    275,274,270,269,
    275,269,156,
    276,274,275,150,
    221,278,277,219,
    279,67,278,221,
    222,280,279,221,
    280,260,279,
    219,277,213,216,
    199,164,166,170,
    197,199,170,
    209,206,165,163,
    164,199,162,
    161,212,209,163,
    199,200,160,162,
    200,158,160,
    215,214,159,154,
    155,218,215,154,
    146,147,196,194,
    202,144,146,
    145,142,276,150,
    202,203,141,144,
    142,143,281,276,
    281,143,133,
    191,282,137,139,
    193,191,139,
    140,203,204,139,
    135,137,282,283,
    284,135,283,
    282,177,283,
    135,284,134,
    285,111,113,134,
    284,285,134,
    285,110,111,
    109,110,285,283,
    177,178,109,283,
    180,107,106,109,
    86,87,90,185,
    55,85,81,79,
    78,80,86,188,
    208,72,74,207,
    70,72,208,210,
    211,71,70,210,
    64,63,73,68,
    62,65,259,61,
    248,60,61,
    73,63,59,75,
    54,85,55,
    258,53,56,
    54,52,84,85,
    258,257,51,53,
    256,48,50,
    84,52,49,
    47,102,49,
    44,40,37,36,
    103,104,29,26,
    43,35,28,29,
    18,119,115,23,
    19,18,23,
    17,25,30,16,
    119,18,15,
    30,31,14,16,
    13,118,119,15,
    12,118,13,
    7,8,127,11,
    127,8,287,286,
    1,231,232,0,
    38,41,288,1,
    2,6,38,1,
    290,288,41,289,
    290,289,237,
    231,288,290,229,
    225,233,238,224,
    253,291,255,
    259,65,67,279,
    260,245,259,279,
    104,43,29,
    46,101,102,47,
    77,58,55,79,
    8,3,0,287,
    293,232,230,292,
    295,293,292,294,
    295,294,271,129,
    296,295,129,
    295,296,286,
    261,226,223,266,
    31,9,10,14,
    213,277,71,211,
    21,103,26,20,
    89,97,93,88,
    189,76,78,188,
    127,286,296,124,
    125,127,124,
    129,271,272,128,
    269,267,157,156,
    126,122,116,117,
    138,136,132,133,
    143,138,133,
    152,158,200,198,
    151,152,198,
    112,24,23,
    178,180,109,
    168,169,184,174,
    41,39,297,289,
    243,240,236,237,
    289,297,243,237,
    297,291,243,
    244,260,280,238,
    235,239,244,238,
    297,39,40,255,
    291,297,255,
    253,251,242,243,
    291,253,243,
    245,246,259,
    45,48,256,254,
    44,45,254,
    51,257,50,
    57,60,56,
    288,231,1,
    290,237,234,227,
    229,290,227,
    238,280,222,224,
    34,6,5,33,
    278,67,66,69,
    42,43,104,98,
    101,46,42,98,
    49,102,100,83,
    84,49,83,
    59,58,77,75,
    287,293,295,286,
    294,292,262,264,
    223,220,217,266,
    95,21,22,94,
    207,189,187,205,
    0,232,293,287,
    292,230,228,262,
    266,217,218,265,
    32,33,5,4,
    9,32,4,
    277,278,69,71,
    96,103,21,95,
    83,100,89,82,
    74,76,189,207,
    124,296,129,
    271,294,264,268,
    265,218,155,157,
    12,11,126,117,
    118,12,117,
    159,214,212,161,
    94,22,24,108,
    105,94,108,
    90,91,107,181,
    205,187,169,167,
    128,273,281,133,
    130,123,128,133,
    281,273,274,276,
    275,156,153,149,
    150,275,149,
    132,136,131,
    141,203,140,
    147,148,151,198,
    285,284,283,
    177,282,191,175,
    171,195,170,
]
