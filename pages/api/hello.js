import fs from "fs";
import path from "path";
export default function handler(req, res) {
  if (req.method === "GET") {
    const filePath = path.join(process.cwd(), "data", "listeApi.json");

    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData);

    res.status(200).json({ data });
  } else if (req.method === "POST") {
    const { words } = req.body;

    const newWord = {
      words,
    };

    const filePath = path.join(process.cwd(), "data", "listeApi.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    console.log(data.wordList);
    data.wordList.push(newWord);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Mot ajouté avec succes" });
  }
}
