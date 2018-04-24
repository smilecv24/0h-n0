function like0hn0(grid) {
    let s = 0;
    result = true;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 0) {
                let tmp = 0;

                if (j < grid.length - 1) {
                    for (let n = j + 1; n < grid.length; n++) {
                        if (grid[n][j] == 0) {
                            break;
                        } else {
                            console.log(3);
                            tmp++;
                        }
                    }
                }

                if (j > 0) {
                    for (let o = j - 1; o < 0; o--) {
                        if (grid[o][j] == 0) {
                            break;
                        } else {
                            console.log(4);
                            tmp++;
                        }
                    }
                }

                if (i < grid.length - 1) {
                    for (let l = i + 1; l < grid.length; l++) {
                        if (grid[i][l] == 0) {
                            break;
                        } else {
                            console.log(1);
                            tmp++;
                        }
                    }
                }

                if (i > 0) {
                    for (let m = i - 1; m < 0; m--) {
                        if (grid[i][m] == 0) {
                            break;
                        } else {
                            console.log(2);
                            tmp++;
                        }
                    }
                }


                if (tmp != grid[i][j]) {
                    console.log(tmp, grid[i][j], i, j);
                    return false;
                }

            }

        }

    }
    return true;
}
