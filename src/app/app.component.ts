import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'webworker-test';

  ngOnInit(): void {
    const worker = new Worker('./myworker.worker', { type: 'module' });
    worker.onmessage = ({ data }) => {
      console.log(`${data}`);
    };
    worker.postMessage({});
  }
}
