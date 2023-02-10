import { Component,Input } from '@angular/core';

@Component({
  selector: 'elewa-group-impact-section',
  templateUrl: './impact-section.component.html',
  styleUrls: ['./impact-section.component.scss'],
})
export class ImpactSectionComponent {
  @Input() title1 = 'Growing capital'
  @Input() title2 = 'Inventing cives?'
  @Input() paragraph1 = 'Elewa is proof that growing capital and empacting lives can work well together'
  @Input() paragraph2 = 'Our group owned and managed by our founder, our employees(across our brands)our network of 56 passionate angel investors'

  @Input() imgSrc = "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNtYWxsJTIwc2Nob29sJTIwa2lkcyUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
}