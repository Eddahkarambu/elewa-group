import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-impact-section',
  templateUrl: './impact-section.component.html',
  styleUrls: ['./impact-section.component.scss'],
})
export class ImpactSectionComponent {
  @Input() title1 = 'Why do we use it?'
  @Input() title2 = 'Where can I get some?'
  @Input() paragraph1 = 'printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  @Input() paragraph2 = 'Where can I get some?'

  @Input() imgSrc = "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNtYWxsJTIwc2Nob29sJTIwa2lkcyUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
}