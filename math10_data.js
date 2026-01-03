const MATH_DATA = [
    // --- Chapter 1. 다항식 ---
    {
        id: "theme-1",
        title: "Theme 1",
        questions: [
            { no: "1", type: "subjective", answer: "3" },
            { 
                no: "2", type: "selection", answer: "1", 
                choices: [
                    "7x² + 10y²", "7x² - 10y²", "3x² + 10y²", "10x² + 7y²", 
                    "-7x² + 10y²", "17x² + 10y²", "7x² + 3y²", "모름"
                ]
            },
            {
                no: "3", type: "selection", answer: "1",
                choices: [
                    "A = 3x² - 5, B = -x² + 3x - 2", 
                    "A = 3x² + 5, B = -x² - 3x - 2",
                    "A = 3x² - 5, B = x² + 3x - 2",
                    "A = -3x² - 5, B = -x² + 3x + 2",
                    "A = 3x² - 2, B = -x² + 3x - 5",
                    "A = 3x² - 5, B = -x² - 3x + 2",
                    "A = 2x² - 5, B = -x² + 2x - 2",
                    "모름"
                ]
            }
        ]
    },
    {
        id: "theme-2",
        title: "Theme 2",
        questions: [
            { no: "1", type: "subjective", answer: "12" },
            { no: "2", type: "subjective", answer: "2" },
            { no: "3", type: "subjective", answer: "48" },
            { no: "4-(1)", type: "subjective", answer: "2" },
            { no: "4-(2)", type: "subjective", answer: "9" },
            { no: "4-(3)", type: "subjective", answer: "1" },
            { no: "4-(4)", type: "subjective", answer: "17" },
            { no: "5", type: "subjective", answer: "44" },
            { no: "6", type: "subjective", answer: "19" },
            { no: "7", type: "subjective", answer: "-1" },
            { no: "8-(1)", type: "subjective", answer: "7" },
            { no: "8-(2)", type: "subjective", answer: "√5" },
            { no: "8-(3)", type: "subjective", answer: "18" },
            { no: "9", type: "subjective", answer: "-18" }
        ]
    },
    {
        id: "theme-3",
        title: "Theme 3",
        questions: [
            { no: "1", type: "subjective", answer: "2" },
            { no: "2", type: "subjective", answer: "-12" },
            { no: "3", type: "subjective", answer: "24" },
            { no: "4", type: "subjective", answer: "3" }
        ]
    },
    {
        id: "step-1-3",
        title: "[STEP UP] Theme 1~3",
        questions: [
            { no: "1", type: "subjective", answer: "49" },
            { no: "2", type: "subjective", answer: "-2" },
            { no: "3", type: "subjective", answer: "7" },
            { no: "4", type: "subjective", answer: "29" },
            { no: "5", type: "subjective", answer: "64" },
            { no: "6", type: "subjective", answer: "2" },
            { no: "7", type: "subjective", answer: "117" },
            { no: "8", type: "subjective", answer: "10" }
        ]
    },
    {
        id: "theme-4",
        title: "Theme 4",
        questions: [
            { no: "1", type: "subjective", answer: "7" },
            { no: "2", type: "subjective", answer: "6" },
            { no: "3", type: "subjective", answer: "-20" },
            { no: "4", type: "subjective", answer: "3" },
            { no: "5-(1)", type: "subjective", answer: "-64" },
            { no: "5-(2)", type: "subjective", answer: "-72" },
            { no: "6-(1)", type: "subjective", answer: "16" },
            { no: "6-(2)", type: "subjective", answer: "8" },
            { no: "6-(3)", type: "subjective", answer: "8" },
            { no: "6-(4)", type: "subjective", answer: "1" }
        ]
    },
    {
        id: "theme-5",
        title: "Theme 5",
        questions: [
            { no: "1", type: "subjective", answer: "20" },
            { no: "2", type: "subjective", answer: "9" },
            { no: "3", type: "subjective", answer: "3" },
            { no: "4", type: "subjective", answer: "4" },
            { no: "5", type: "subjective", answer: "x+2" },
            { no: "6", type: "subjective", answer: "30" },
            { no: "7", type: "subjective", answer: "33" }
        ]
    },
    {
        id: "theme-6",
        title: "Theme 6",
        questions: [
            { no: "1-(1)", type: "subjective", answer: "2000" },
            { no: "1-(2)", type: "subjective", answer: "999" },
            { no: "2", type: "subjective", answer: "5" },
            {
                no: "3-(1)", type: "selection", answer: "1",
                choices: [
                    "(x+1)(x+4)(x-3)", "(x-1)(x-4)(x+3)", "(x+1)(x-4)(x+3)", 
                    "(x-1)(x+4)(x-3)", "(x+1)(x+4)(x+3)", "(x+1)(x+3)(x-4)", 
                    "(x-1)(x+4)(x+3)", "모름"
                ]
            },
            {
                no: "3-(2)", type: "selection", answer: "1",
                choices: [
                    "(x+2)(x-3)(2x-1)", "(x-2)(x+3)(2x+1)", "(x+2)(x+3)(2x-1)", 
                    "(x+2)(x-3)(2x+1)", "(x-2)(x-3)(2x-1)", "(x+1)(x-2)(2x-3)", 
                    "(x+2)(x+3)(2x+1)", "모름"
                ]
            },
            {
                no: "3-(3)", type: "selection", answer: "1",
                choices: [
                    "(x-1)(2x+1)(x²+x+3)", "(x+1)(2x-1)(x²-x+3)", "(x-1)(2x-1)(x²+x+3)", 
                    "(x-1)(2x+1)(x²-x+3)", "(x+1)(2x+1)(x²+x-3)", "(x-1)(2x+1)(x²-x-3)", 
                    "(x+1)(2x-1)(x²+x+3)", "모름"
                ]
            },
            { no: "4", type: "subjective", answer: "8" }
        ]
    },
    {
        id: "step-4-6",
        title: "[STEP UP] Theme 4~6",
        questions: [
            { no: "1", type: "subjective", answer: "2" },
            { no: "2", type: "subjective", answer: "5" },
            { no: "3", type: "subjective", answer: "21" },
            { no: "4", type: "subjective", answer: "8" },
            { no: "5", type: "subjective", answer: "7" },
            { no: "6", type: "subjective", answer: "2" },
            { no: "7", type: "subjective", answer: "5" },
            { no: "8", type: "subjective", answer: "3" },
            { no: "9", type: "subjective", answer: "26" },
            { no: "10", type: "subjective", answer: "7" },
            { no: "11", type: "subjective", answer: "16" },
            { no: "12", type: "subjective", answer: "2" },
            { no: "13", type: "subjective", answer: "1400" },
            { no: "14", type: "subjective", answer: "4" },
            { no: "15", type: "subjective", answer: "6" },
            { no: "16", type: "subjective", answer: "5" }
        ]
    },

    // --- Chapter 2. 방정식과 부등식 ---
    {
        id: "theme-7",
        title: "Theme 7",
        questions: [
            { no: "1", type: "subjective", answer: "5" }
        ]
    },
    {
        id: "theme-8",
        title: "Theme 8",
        questions: [
            { no: "1", type: "subjective", answer: "11" },
            { no: "2", type: "subjective", answer: "-3" },
            { no: "3", type: "subjective", answer: "15" },
            { no: "4", type: "subjective", answer: "6" },
            { no: "5", type: "subjective", answer: "-1" },
            { no: "6", type: "subjective", answer: "6" },
            { no: "7", type: "subjective", answer: "1" },
            { no: "8", type: "subjective", answer: "2" },
            { no: "9", type: "subjective", answer: "10" },
            { no: "10", type: "subjective", answer: "10" },
            { no: "11", type: "subjective", answer: "4" },
            { no: "12", type: "subjective", answer: "6" },
            { no: "13", type: "subjective", answer: "-10" }
        ]
    },
    {
        id: "step-7-8",
        title: "[STEP UP] Theme 7~8",
        questions: [
            { no: "1", type: "subjective", answer: "3" },
            { no: "2", type: "subjective", answer: "4" },
            { no: "3", type: "subjective", answer: "7" },
            { no: "4", type: "subjective", answer: "4" },
            { no: "5", type: "subjective", answer: "3" },
            { no: "6", type: "subjective", answer: "17" },
            { no: "7", type: "subjective", answer: "4" },
            { no: "8", type: "subjective", answer: "1" },
            { no: "9", type: "subjective", answer: "5" },
            { no: "10", type: "subjective", answer: "10" },
            { no: "11", type: "subjective", answer: "1" },
            { no: "12", type: "subjective", answer: "35" }
        ]
    },
    {
        id: "theme-9",
        title: "Theme 9",
        questions: [
            { no: "1", type: "subjective", answer: "10" },
            { no: "2", type: "subjective", answer: "7" }
        ]
    },
    {
        id: "theme-10",
        title: "Theme 10",
        questions: [
            { no: "1", type: "subjective", answer: "40" },
            { no: "2", type: "subjective", answer: "-32" },
            { no: "3", type: "subjective", answer: "47" },
            { no: "4", type: "subjective", answer: "2" },
            { no: "5", type: "subjective", answer: "2" },
            { no: "6", type: "subjective", answer: "-4" },
            { no: "7", type: "subjective", answer: "1/2" },
            { no: "8", type: "subjective", answer: "3" },
            { no: "9", type: "subjective", answer: "0" },
            { no: "10", type: "subjective", answer: "2" },
            { no: "11", type: "subjective", answer: "2" },
            { no: "12", type: "subjective", answer: "4" }
        ]
    },
    {
        id: "step-9-10",
        title: "[STEP UP] Theme 9~10",
        questions: [
            { no: "1", type: "subjective", answer: "1" },
            { no: "2", type: "subjective", answer: "9" },
            { no: "3", type: "subjective", answer: "28" },
            { no: "4", type: "subjective", answer: "21" },
            { no: "5", type: "subjective", answer: "48" },
            { no: "6", type: "subjective", answer: "4" },
            { no: "7", type: "subjective", answer: "1" },
            { no: "8", type: "subjective", answer: "4" },
            { no: "9", type: "subjective", answer: "1" },
            { no: "10", type: "subjective", answer: "7" }
        ]
    },
    {
        id: "theme-11",
        title: "Theme 11",
        questions: [
            { no: "1", type: "subjective", answer: "3" },
            { no: "2", type: "subjective", answer: "-8" },
            { no: "3", type: "subjective", answer: "1" },
            { no: "4", type: "subjective", answer: "14" },
            { no: "5", type: "subjective", answer: "7" },
            { no: "6", type: "subjective", answer: "-12" }
        ]
    },
    {
        id: "theme-12",
        title: "Theme 12",
        questions: [
            { no: "1", type: "subjective", answer: "-39" },
            { no: "2", type: "subjective", answer: "8" },
            { no: "3", type: "subjective", answer: "45" },
            { no: "4", type: "subjective", answer: "10" }
        ]
    },
    {
        id: "theme-13",
        title: "Theme 13",
        questions: [
            { no: "1", type: "subjective", answer: "-14" },
            { no: "2", type: "subjective", answer: "4" },
            { no: "3", type: "subjective", answer: "-6" }
        ]
    },
    {
        id: "step-11-13",
        title: "[STEP UP] Theme 11~13",
        questions: [
            { no: "1", type: "subjective", answer: "2" },
            { no: "2", type: "subjective", answer: "8" },
            { no: "3", type: "subjective", answer: "4" },
            { no: "4", type: "subjective", answer: "28" },
            { no: "5", type: "subjective", answer: "2" },
            { no: "6", type: "subjective", answer: "5" },
            { no: "7", type: "subjective", answer: "11" },
            { no: "8", type: "subjective", answer: "3" },
            { no: "9", type: "subjective", answer: "12" },
            { no: "10", type: "subjective", answer: "5" },
            { no: "11", type: "subjective", answer: "3" }
        ]
    },
    {
        id: "theme-14",
        title: "Theme 14",
        questions: [
            { no: "1", type: "subjective", answer: "23" },
            { no: "2", type: "subjective", answer: "8" },
            { no: "3", type: "subjective", answer: "2" },
            { no: "4", type: "subjective", answer: "-11" },
            { no: "5", type: "subjective", answer: "-2" }
        ]
    },
    {
        id: "theme-15",
        title: "Theme 15",
        questions: [
            { no: "1", type: "subjective", answer: "6" },
            { no: "2", type: "subjective", answer: "-3" },
            { no: "3", type: "subjective", answer: "-2" },
            { no: "4", type: "subjective", answer: "-1" },
            { no: "5", type: "subjective", answer: "2" }
        ]
    },
    {
        id: "theme-16",
        title: "Theme 16",
        questions: [
            { no: "1", type: "subjective", answer: "2" },
            { no: "2", type: "subjective", answer: "25" },
            { no: "3", type: "subjective", answer: "85" },
            { no: "4", type: "subjective", answer: "29" },
            { no: "5", type: "subjective", answer: "4" }
        ]
    },
    {
        id: "step-14-16",
        title: "[STEP UP] Theme 14~16",
        questions: [
            { no: "1", type: "subjective", answer: "3" },
            { no: "2", type: "subjective", answer: "7" },
            { no: "3", type: "subjective", answer: "333" },
            { no: "4", type: "subjective", answer: "4" },
            { no: "5", type: "subjective", answer: "5" },
            { no: "6", type: "subjective", answer: "20" },
            { no: "7", type: "subjective", answer: "6" },
            { no: "8", type: "subjective", answer: "30" },
            { no: "9", type: "subjective", answer: "21" },
            { no: "10", type: "subjective", answer: "4" },
            { no: "11", type: "subjective", answer: "10" },
            { no: "12", type: "subjective", answer: "20" }
        ]
    },
    {
        id: "theme-17",
        title: "Theme 17",
        questions: [
            { no: "1", type: "subjective", answer: "4" },
            { no: "2", type: "subjective", answer: "14" },
            { no: "3", type: "subjective", answer: "5" },
            { no: "4", type: "subjective", answer: "3" }
        ]
    },
    {
        id: "theme-18",
        title: "Theme 18",
        questions: [
            { no: "1", type: "subjective", answer: "10" },
            { no: "2", type: "subjective", answer: "-2" },
            { no: "3", type: "subjective", answer: "7" },
            {
                no: "4", type: "selection", answer: "1",
                choices: [
                    "a > 1", "a < 1", "a ≥ 1", "a ≤ 1", 
                    "a > 0", "a > -1", "a ≠ 1", "모름"
                ]
            },
            { no: "5", type: "subjective", answer: "10" },
            { no: "6", type: "subjective", answer: "-18" },
            {
                no: "7", type: "selection", answer: "1",
                choices: [
                    "-1 ≤ k ≤ 0", "-1 < k < 0", "-1 ≤ k < 0", "-1 < k ≤ 0", 
                    "0 ≤ k ≤ 1", "-1 ≤ k ≤ 1", "k ≤ -1 또는 k ≥ 0", "모름"
                ]
            }
        ]
    },
    {
        id: "step-17-18",
        title: "[STEP UP] Theme 17~18",
        questions: [
            { no: "1", type: "subjective", answer: "22" },
            { no: "2", type: "subjective", answer: "42" },
            { no: "3", type: "subjective", answer: "-1" },
            { no: "4", type: "subjective", answer: "18" },
            { no: "5", type: "subjective", answer: "2" },
            { no: "6", type: "subjective", answer: "5" },
            { no: "7", type: "subjective", answer: "11" },
            { no: "8", type: "subjective", answer: "4" },
            { no: "9", type: "subjective", answer: "15" },
            { no: "10", type: "subjective", answer: "10" }
        ]
    },

    // --- Chapter 3. 경우의 수 ---
    {
        id: "theme-19",
        title: "Theme 19",
        questions: [
            { no: "1", type: "subjective", answer: "36" },
            { no: "2", type: "subjective", answer: "18" },
            { no: "3", type: "subjective", answer: "8" },
            { no: "4", type: "subjective", answer: "48" },
            { no: "5", type: "subjective", answer: "8" },
            { no: "6", type: "subjective", answer: "18" }
        ]
    },
    {
        id: "theme-20",
        title: "Theme 20",
        questions: [
            { no: "1-(1)", type: "subjective", answer: "6" },
            { no: "1-(2)", type: "subjective", answer: "10" },
            { no: "2-(1)", type: "subjective", answer: "96" },
            { no: "2-(2)", type: "subjective", answer: "48" },
            { no: "2-(3)", type: "subjective", answer: "36" },
            { no: "2-(4)", type: "subjective", answer: "24" },
            { no: "2-(5)", type: "subjective", answer: "60" },
            { no: "2-(6)", type: "subjective", answer: "30" },
            { no: "3-(1)", type: "subjective", answer: "5040" },
            { no: "3-(2)", type: "subjective", answer: "10" },
            { no: "3-(3)", type: "subjective", answer: "66" },
            { no: "4", type: "subjective", answer: "12" }
        ]
    },
    {
        id: "step-19-20",
        title: "[STEP UP] Theme 19~20",
        questions: [
            { no: "1", type: "subjective", answer: "5" },
            { no: "2", type: "subjective", answer: "720" },
            { no: "3", type: "subjective", answer: "24" },
            { no: "4", type: "subjective", answer: "307" },
            { no: "5", type: "subjective", answer: "189" },
            { no: "6", type: "subjective", answer: "72" },
            { no: "7", type: "subjective", answer: "144" },
            { no: "8", type: "subjective", answer: "160" },
            { no: "9", type: "subjective", answer: "144" },
            { no: "10", type: "subjective", answer: "42" }
        ]
    },
    {
        id: "theme-21",
        title: "Theme 21",
        questions: [
            { no: "1", type: "subjective", answer: "60" },
            { no: "2", type: "subjective", answer: "60" },
            { no: "3-(1)", type: "subjective", answer: "354" },
            { no: "3-(2)", type: "subjective", answer: "270" },
            { no: "4", type: "subjective", answer: "35" },
            { no: "5-(1)", type: "subjective", answer: "480" },
            { no: "5-(2)", type: "subjective", answer: "192" },
            { no: "6", type: "subjective", answer: "35" },
            { no: "7", type: "subjective", answer: "90" },
            { no: "8", type: "subjective", answer: "45" }
        ]
    },
    {
        id: "theme-22",
        title: "Theme 22",
        questions: [
            { no: "1", type: "subjective", answer: "9" },
            { no: "2-(1)", type: "subjective", answer: "36" },
            { no: "2-(2)", type: "subjective", answer: "110" },
            { no: "3-(1)", type: "subjective", answer: "60" },
            { no: "3-(2)", type: "subjective", answer: "20" },
            { no: "4-(1)", type: "subjective", answer: "56" },
            { no: "4-(2)", type: "subjective", answer: "24" },
            { no: "4-(3)", type: "subjective", answer: "24" },
            { no: "4-(4)", type: "subjective", answer: "8" }
        ]
    },
    {
        id: "step-21-22",
        title: "[STEP UP] Theme 21~22",
        questions: [
            { no: "1", type: "subjective", answer: "16" },
            { no: "2", type: "subjective", answer: "8" },
            { no: "3", type: "subjective", answer: "60" },
            { no: "4", type: "subjective", answer: "35" },
            { no: "5", type: "subjective", answer: "60" },
            { no: "6", type: "subjective", answer: "495" },
            { no: "7", type: "subjective", answer: "200" },
            { no: "8", type: "subjective", answer: "336" },
            { no: "9", type: "subjective", answer: "72" },
            { no: "10", type: "subjective", answer: "100" },
            { no: "11", type: "subjective", answer: "412" },
            { no: "12", type: "subjective", answer: "60" },
            { no: "13", type: "subjective", answer: "36" }
        ]
    },

    // --- Chapter 4. 행렬 ---
    {
        id: "theme-23",
        title: "Theme 23",
        questions: [
            { no: "1", type: "subjective", answer: "4" },
            { no: "2", type: "subjective", answer: "9" },
            { no: "3", type: "subjective", answer: "20" },
            { no: "4", type: "subjective", answer: "15" }
        ]
    },
    {
        id: "theme-24",
        title: "Theme 24",
        questions: [
            { no: "1", type: "subjective", answer: "22" },
            { no: "2", type: "subjective", answer: "1" },
            { no: "3", type: "subjective", answer: "4" },
            { no: "4", type: "subjective", answer: "4" },
            { no: "5", type: "subjective", answer: "7" },
            { no: "6", type: "subjective", answer: "11" },
            { no: "7", type: "subjective", answer: "33" },
            { no: "8", type: "subjective", answer: "1" },
            { no: "9", type: "subjective", answer: "3" }
        ]
    },
    {
        id: "step-23-24",
        title: "[STEP UP] Theme 23~24",
        questions: [
            { no: "1", type: "subjective", answer: "4" },
            { no: "2", type: "subjective", answer: "3" },
            { no: "3", type: "subjective", answer: "24" },
            { no: "4", type: "subjective", answer: "3" },
            { no: "5", type: "subjective", answer: "21" },
            { no: "6", type: "subjective", answer: "502" },
            { no: "7", type: "subjective", answer: "100" },
            { no: "8", type: "subjective", answer: "4" },
            { no: "9", type: "subjective", answer: "18" },
            { no: "10", type: "subjective", answer: "4" }
        ]
    }
];