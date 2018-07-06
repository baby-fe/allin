import React ,{Component}from 'react'
import {Route, Redirect, IndexRoute } from 'react-router'
import Root from '@/components/root'
import Home from '@/containers/home/views'

const moduleRoute  = require.context('./containers', true, /^\.\/\S+\/route\.js$/) //获取view视图下，所有router文件

// class Root extends Component {
//     render() {
//         return (
//             <div>
//               {this.props.children}
//             </div>
//         );
//     }
// }
const router = store => {
    return <Route path="/" component={Root}>
                <IndexRoute component={Home} onEnter={console.log('enterhome')}/>
                    {
                        moduleRoute.keys().map(key => {
                            return moduleRoute(key).default(store)
                        })
                    }
                    <Redirect from='*' to='/'  />

            </Route>
}

export default router
