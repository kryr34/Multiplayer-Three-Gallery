# 快樂大三專題 開發流程

## 1. git workflow

在目前的系統中，main branch 如果有任何 push，都會觸發**自動部屬**
也就是說如果程式碼有問題，會直接影響到線上的系統
如果各位在開發新功能時，可以照著以下流程進行
```bash
git checkout main # 切換到 main branch
git pull # 確保 local 的 main branch 是最新的版本
git checkout -b <branch_name> # 建立新的 branch 並切換到新的 branch
# 開始開發新功能
# 反覆的 add, commit，然後消滅 bug，直到功能完成
```
完成後，要來開 PR
Pull Request，相當於向所有人告知你完成了某個功能，並且請大家來檢查你的程式碼
1. 打開 [Github 專案頁面](https://github.com/SR0725/Multiplayer-Three-Gallery/pulls)
![Alt text](images/image.png)

2. 點選 [![`New pull request`](https://github.com/kryr34/Multiplayer-Three-Gallery/assets/78149128/3845cd3b-425d-476b-ab77-e5a4560302cb)](https://github.com/SR0725/Multiplayer-Three-Gallery/compare)

![Alt text](images/image2.png)
確認上方的 `compare` 是你剛剛開發的 branch，旁邊的 `base` 是 main branch

3. 點選 ![`Create pull request`](https://github.com/kryr34/Multiplayer-Three-Gallery/assets/78149128/5ad7d8e3-dd57-4009-ad29-6e811ae03f12)


4. 輸入 PR 的標題和內容，並且點選 ![`Create pull request`](https://github.com/kryr34/Multiplayer-Three-Gallery/assets/78149128/f94876f5-f4c3-4ed6-8c69-029183045d49)


5. 叫其他人幫你看 PR，如果確定沒問題，就可以點選 ![`Merge pull request`](https://github.com/kryr34/Multiplayer-Three-Gallery/assets/78149128/268dcf2f-be36-4fd0-ae66-b7e6ea4801bf)
，並且刪除這個 branch

如果要開發新的功能，請重複上述步驟
## Install

1. `yarn`
2. `yarn prepare` to enable git hook

## Running Developer Server

`yarn dev` or `npm run dev`

## Running Production Server

`yarn build` and `yarn start`

## Running Test

`yarn test` and `yarn lint`

## Husky Git Hooks

為了保證程式碼安全，在 push 之前會先執行 `yarn lint` 和 `yarn test`，檢查全部程式碼是否正常，如果有錯誤，則會阻止 push
所以在遇到錯誤時，可以執行看看上面那兩個 Test 指令
並修正錯誤，才能 push

## File Structure
```bash
\- app
    \- [頁面名稱]
        \- layout.tsx
        # 放共用的排版設計，它會讓所有的子頁面都繼承這個排版設計
        \- page.tsx
        # 這裡是放這個頁面的主要元件
        \- _components 
            # 這裡頭是放只會出現在這個頁面的元件
            \- [元件名稱]
                \- index.tsx
        \- _hooks_ 
            # 這裡頭是放只會出現在這個頁面的 hooks
            \- [hooks名稱]
                \- index.tsx

        \- [子頁面名稱]
            \- layout.tsx
            # 放共用的排版設計，值得一提的是，這裡的 layout.tsx 會繼承上層的 layout.tsx
            \- page.tsx
            # 這裡是放這個頁面的主要元件
            \- _components
            # 這裡頭是放只會出現在這個頁面的元件
                \- [元件名稱]
                    \- index.tsx
            \- _hooks_ 
                # 這裡頭是放只會出現在這個頁面的 hooks
                \- [hooks名稱]
                    \- index.tsx
\- src
    # 放共用元件
    \- components
        # 這裡頭是放會在所有頁面出現的元件(共用元件)
        \- [元件名稱]
            \- index.tsx

    \- hooks
        # 這裡頭是放會在所有頁面出現的 hooks(共用 hooks)
        \- [hooks名稱]
            \- index.tsx
```

