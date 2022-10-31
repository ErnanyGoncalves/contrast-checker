export const prepareArrayOfColors = (textareaValue:string) => textareaValue.split(",");

export const createPairsOfColors = (colors: string[]) => {
  const pairs: string[][] = [];

  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      pairs.push([colors[i], colors[j]]);
    }
  }
  return pairs;
};

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16), //R
        parseInt(result[2], 16), //G
        parseInt(result[3], 16), //B
      ]
    : [];
};

const getRelativeLuminance = (color: string) => {
  let a = hexToRgb(color).map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const calculateRatio = (textColor: number, backColor: number) =>
  (Math.max(textColor, backColor) + 0.05) /
  (Math.min(textColor, backColor) + 0.05);



export const getResults = (pairs: object[]) => {
  const results: object[] = [];
  pairs.forEach((pair: any) => {
    const ratio = calculateRatio(
      getRelativeLuminance(pair[0]),
      getRelativeLuminance(pair[1])
    );
    results.push({
      colors: [pair[0], pair[1]],
      ratio: ratio.toFixed(2),
      tests: {
        aaNormal: ratio >= 4.5,
        aaLarge: ratio >= 3,
        aaaNormal: ratio >= 7,
        aaaLarge: ratio >= 4.5,
      },
    });
  });

  return results;
};



export const onlyUnique = (value: any, index: number, self: any) =>
  self.indexOf(value) === index;