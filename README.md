# web3react-demo
作为react web3 单页应用开发参考
主要包括：
## web3
"@web3-react/core": "6.1.9",
"@web3-react/injected-connector": "6.0.7",
"@web3-react/walletconnect-connector": "6.2.13",
"@web3-react/walletlink-connector": "6.2.13",
## 单页应用
"react-router-dom": "5.2.0"

## ui组件
"@chakra-ui/react": "1.8.6"

# 说明
路由参考
https://codesandbox.io/s/basic-chakra-ui-setup-with-react-router-po6q5?file=/package.json
页面模板美化参考 
https://chakra-templates.dev/navigation/navbar



# 过程问题记录

react路由更新 页面不更新？
把路由文件的默认页面放在最下面就可以解决问题了
```
<Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="/wollect">
            <WollectView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
```