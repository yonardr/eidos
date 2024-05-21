import data from '../assets/data1.json'
export const sessionsModule= {
    state: {
        currentPage: 1,
        totalItemInPage: 10,
        sessions: data.sessions,
    },
    mutations: {
        setCurrentPage(state: any, page: number) {
            state.currentPage = page;
        },
        setNextPage(state: any) {
            if(state.currentPage + 1 <= Math.ceil(state.sessions.length/state.totalItemInPage)) state.currentPage++;
        },
        setBackPage(state: any) {
            if(state.currentPage > 1) state.currentPage--;
        },
        setSortData(state: any, newData: any){
            state.sessions = newData
        }
    },
    getters:{
        getSessions(state: any){
            const from :number =  (state.currentPage-1) * state.totalItemInPage
            const to: number = from + state.totalItemInPage
            return state.sessions.slice(from, to)
        },
        getCurrentPage(state: any){
          return state.currentPage;
        },
        getCountPages(state: any){
          return Math.ceil(state.sessions.length/state.totalItemInPage)
        },

    }
}