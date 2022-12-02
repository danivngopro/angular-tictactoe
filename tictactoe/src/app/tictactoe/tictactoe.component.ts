import { Component } from "@angular/core";

@Component({
  selector: "app-tictactoe",
  templateUrl: "./tictactoe.component.html",
  styleUrls: ["./tictactoe.component.scss"],
})
export class TictactoeComponent {
  currentPlayer = "";
  gameArr: string[][] = [];
  winner = "";

  constructor() {}

  ngOnInit(): void {
    this.currentPlayer = "x";
    this.gameArr = [
      new Array(3).fill(""),
      new Array(3).fill(""),
      new Array(3).fill(""),
    ];
    this.winner = '';
  }

  nextTurn(i: number, j: number): void {
    if (this.winner === "") {
      this.gameArr[i][j] = this.currentPlayer;

      if (this.currentPlayer === "x") this.currentPlayer = "o";
      else this.currentPlayer = "x";

      this.checkWinner();
    }
  }

  newGame(): void {
    this.ngOnInit();
  }

  checkWinner(): void {
    if (
      (this.gameArr[0][0] === "x" &&
        this.gameArr[0][1] === "x" &&
        this.gameArr[0][2] === "x") ||
      (this.gameArr[1][0] === "x" &&
        this.gameArr[1][1] === "x" &&
        this.gameArr[1][2] === "x") ||
      (this.gameArr[2][0] === "x" &&
        this.gameArr[2][1] === "x" &&
        this.gameArr[2][2] === "x") ||
      (this.gameArr[0][0] === "x" &&
        this.gameArr[1][0] === "x" &&
        this.gameArr[2][0] === "x") ||
      (this.gameArr[0][1] === "x" &&
        this.gameArr[1][1] === "x" &&
        this.gameArr[2][1] === "x") ||
      (this.gameArr[0][2] === "x" &&
        this.gameArr[1][2] === "x" &&
        this.gameArr[2][2] === "x") ||
      (this.gameArr[0][0] === "x" &&
        this.gameArr[1][1] === "x" &&
        this.gameArr[2][2] === "x") ||
      (this.gameArr[0][2] === "x" &&
        this.gameArr[1][1] === "x" &&
        this.gameArr[2][0] === "x")
    ) {
      this.winner = "x";
    } else if (
      (this.gameArr[0][0] === "o" &&
        this.gameArr[0][1] === "o" &&
        this.gameArr[0][2] === "o") ||
      (this.gameArr[1][0] === "o" &&
        this.gameArr[1][1] === "o" &&
        this.gameArr[1][2] === "o") ||
      (this.gameArr[2][0] === "o" &&
        this.gameArr[2][1] === "o" &&
        this.gameArr[2][2] === "o") ||
      (this.gameArr[0][0] === "o" &&
        this.gameArr[1][0] === "o" &&
        this.gameArr[2][0] === "o") ||
      (this.gameArr[0][1] === "o" &&
        this.gameArr[1][1] === "o" &&
        this.gameArr[2][1] === "o") ||
      (this.gameArr[0][2] === "o" &&
        this.gameArr[1][2] === "o" &&
        this.gameArr[2][2] === "o") ||
      (this.gameArr[0][0] === "o" &&
        this.gameArr[1][1] === "o" &&
        this.gameArr[2][2] === "o") ||
      (this.gameArr[0][2] === "o" &&
        this.gameArr[1][1] === "o" &&
        this.gameArr[2][0] === "o")
    ) {
      this.winner = "o";
    }
  }
}
