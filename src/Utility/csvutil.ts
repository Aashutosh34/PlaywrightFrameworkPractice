import fs from "fs";
import { parse } from 'csv-parse/sync'

export class CsvHelper {

    static readCsv(filePath: string): Record<string, string>[] {      //here readCsv function says you have to give me filePath.
        return parse(fs.readFileSync(filePath, "utf-8"), {  //readFileSync says give the filePath and utf8 means when any special character/chinese/japanese character please take it as a character only.
            columns: true,  //gives instruction as first row from csv file is always header.
            skip_empty_lines: true,
            trim: true,
        }) as Record<string, string>[];  //what kind of data fetching from csv file we maintaining this step and returning at line 6.
        //Record<string, string>[] here one string is for csv file header columns and one string for csv file data.
    }
}