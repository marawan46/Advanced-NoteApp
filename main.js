document.addEventListener('DOMContentLoaded',main)


function main(){
  const icons = Quill.import('ui/icons');

  
  const options = [
    [{ header: [1, 2, 3, 4, false] }], // Header levels
    ['bold', 'italic', 'underline', 'strike'], // Text styles
    [{align:[]}],
    [{font:[]}],
    [{formula:[]}],
    [{ color: ['#fff','#000'] }, { background: [] }], // Text and background colors
    [{ list: 'ordered' }, { list: 'bullet' }], // Lists
    ['link', 'image', 'video'], // Media tools
    ['code-block'], // Code block
    ['clean'] // Remove formatting

]

const quill = new Quill('#text-editor',{
  debug: 'info',
  modules: {
    toolbar: options,
    
  },

  theme: 'snow'

});


}

function toggleSidebar(){
    document.querySelector('#sideBar').classList.toggle('minimize-left')
    document.querySelector('#collapse-btn-header').classList.toggle('d-none')
    
    console.log('ok')
}