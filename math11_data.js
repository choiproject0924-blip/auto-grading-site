// --- Raw Data from File (Enhanced) ---
const RAW_DATA = [
    {
      "title": "STEP 1. Theme 1~3",
      "answers": [
        "4", "3", "5",
        {
          "qNum": 4,
          "type": "multiple_choice_generated",
          "correctAnswer": "64x^6 - 1",
          "options": ["64x^6 - 1", "64x^6 + 1", "32x^6 - 1", "(2x)^6 + 1", "64x^3 - 1", "16x^6 - 1", "64x^5 - 1", "모름"]
        },
        "5", "2", "3", "36", "8", "3", "5", "5", "4", "2", "5", "1", "5"
      ]
    },
    {
      "title": "STEP 1. Theme 4~6",
      "answers": [
        "3", "2", "5", "5", "21", "5", "1", "2", "2", "5", "1", "2", "5", "4", "14", "4", "3",
        {
          "qNum": 18,
          "type": "multiple_choice_generated",
          "correctAnswer": "7x - 10",
          "options": ["7x - 10", "7x + 10", "10x - 7", "-7x - 10", "7x - 7", "x - 10", "7x", "모름"]
        },
        {
          "qNum": 19,
          "type": "multiple_choice_generated",
          "correctAnswer": "2x - 1",
          "options": ["2x - 1", "2x + 1", "x - 2", "-2x - 1", "x - 1", "4x - 2", "2x", "모름"]
        },
        "4", "3", "9", "4", "82", "3", "4", "1", "2", "1", "4", "5", "16", "3", "4"
      ]
    },
    {
      "title": "STEP 2. Theme 1~6",
      "answers": [
        "24", "142", "19", "1", "723", "1", "18", "2", "9", "1", "13", "2", "11", "3", "33", "5", "3", "1", "326", "2"
      ]
    },
    {
      "title": "STEP 1. Theme 7~8",
      "answers": [
        "3", "15", "1", "2", "5", "7", "4", "3", "2", "101", "44", "97", "1", "16", "3", "2", "3", "3", "1", "4"
      ]
    },
    {
      "title": "STEP 1. Theme 9~10",
      "answers": [
        "3", "2", "2", "3", "2", "3", "2", "5", "4", "2",
        {
          "qNum": 11,
          "type": "multiple_choice_generated",
          "correctAnswer": "x^2 - 3\\sqrt{5}x + 10 = 0",
          "options": ["x^2 - 3\\sqrt{5}x + 10 = 0", "x^2 + 3\\sqrt{5}x + 10 = 0", "x^2 - 3\\sqrt{5}x - 10 = 0", "x^2 - 5\\sqrt{3}x + 10 = 0", "x^2 - 3x + 10 = 0", "x^2 + 3\\sqrt{5}x - 10 = 0", "2x^2 - 3\\sqrt{5}x + 5 = 0", "모름"]
        },
        "3", "5", "2", "4", "4", "-4", "4"
      ]
    },
    {
      "title": "STEP 1. Theme 11~13",
      "answers": ["5", "2", "5", "4", "3", "1", "5", "1", "1", "5", "4", "2", "3", "30", "1", "2", "1", "2"]
    },
    {
      "title": "STEP 1. Theme 14~16",
      "answers": ["4", "4", "1", "3", "2", "5", "3", "16", "32", "4", "4", "2", "5", "10", "3"]
    },
    {
      "title": "STEP 1. Theme 17~18",
      "answers": [
        "9", "5", "14", "8", "22", "1",
        {
          "qNum": 7,
          "type": "multiple_choice_generated",
          "correctAnswer": "-1 \\le k \\le 0",
          "options": ["-1 \\le k \\le 0", "-1 < k < 0", "0 \\le k \\le 1", "k \\le -1", "-1 \\le k < 0", "-1 \\le k \\le 1", "k = -1 \\text{ or } k = 0", "모름"]
        },
        "7", "3", "1", "1", "4", "2", "4", "1", "1", "5", "2"
      ]
    },
    {
      "title": "STEP 2. Theme 7~18",
      "answers": ["5", "5", "4", "4", "5", "12", "2", "4", "8", "12", "1", "3", "3", "6", "2", "3", "18", "3", "3", "1", "0<a<9", "2", "8", "5"]
    },
    {
      "title": "STEP 1. Theme 19~20",
      "answers": ["17", "4", "2", "24", "5", "780", "192", "4", "4", "6", "5", "3", "4", "3", "144", "60", "720", "864", "3", "5", "30", "216"]
    },
    {
      "title": "STEP 1. Theme 21~22",
      "answers": ["1", "48", "1", "28", "30", "5", "3", "20", "105", "3", "19", "54", "2"]
    },
    {
      "title": "STEP 2. Theme 19~22",
      "answers": ["21", "372", "487", "2", "2", "372", "4", "2", "5", "288", "4"]
    },
    {
      "title": "STEP 1. Theme 23~24",
      "answers": ["4", "1", "5", "4", "5", "1", "4", "4", "5", "2", "5", "2", "1", "2", "4", "3", "6", "18", "16", "4", "1"]
    },
    {
      "title": "STEP 2. Theme 23~24",
      "answers": ["64", "81", "4", "64", "2", "8"]
    }
];

// --- Transformation Logic (Runtime) ---
const MATH_DATA = RAW_DATA.map((section, sIdx) => {
    return {
        id: `theme-auto-${sIdx + 1}`,
        title: section.title,
        questions: section.answers.map((ans, qIdx) => {
            const qNum = String(qIdx + 1);
            
            // Case 1: Complex Object (Explicit Multiple Choice)
            if (typeof ans === 'object' && ans.type === 'multiple_choice_generated') {
                const correctIdx = ans.options.findIndex(opt => opt === ans.correctAnswer);
                return {
                    no: qNum,
                    type: "selection",
                    answer: String(correctIdx + 1), // 1-based index
                    choices: ans.options
                };
            }
            
            // Case 2: Simple Value (Treat as Subjective Keypad Input)
            // Note: Even simple selection questions (1-5) are better handled via keypad 
            // if we don't have the text for choices.
            return {
                no: qNum,
                type: "subjective", 
                answer: String(ans).trim()
            };
        })
    };
});