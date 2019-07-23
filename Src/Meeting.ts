import Participant from './Participant';
import Cards from './Cards';
export default class Meeting{
    constructor(){
        this.Participants = [];        
        this.Cards = [];
    }

    Id: any;
    Name: string;
    private Participants: Array<Participant>;
    EndTime: Date;
    EndVisibleRezsults: Date;
    Cards: Array<Cards>;
    public AddParticipant(p:Participant ){
        this.Participants.push(p);
    }
    public AllUnchecked(): boolean{
        return (this.Cards.filter(it=>it.IsChecked()).length === 0);
    }

    public CheckCard(c: Cards , p:Participant){
        //TODO: verify participant is added first or add
        //TODO: verify card is added first
        c.CheckMe(p);
    }



}