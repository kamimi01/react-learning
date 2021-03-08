# React Docs

## アプリの実行

- JavaScript の新しい機能に対応していないブラウザでも動作するよう、Babel によって JavaScript をコンパイルする
  - `npx babel --watch src --out-dir ./dist --presets react-app/prod`
    - src 以下のファイルを dist 以下にコンパイルして出力する
    - src 以下のファイルの変更を検知するために`--watch`を使っている

## その他

- 普通なら dist ディレクトリは Git 管理対象外のはずだが、コンパイル結果の確認のため、管理対象とする
