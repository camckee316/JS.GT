var cover = [
    {
        _type:"Normal",
        _super:"None",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying Grass, Ground, Ice, Normal, Poison, Psychic, Water",
        _resists:"Rock, Steel",
        _imm:"Ghost"
    },
    {
        _type:"Fire",
        _super:"Bug, Grass, Ice, Steel",
        _neutral:"Dark, Electric, Fairy, Fighting, Flying, Ghost, Ground, Normal, Poison, Psychic",
        _resists:"Dragon, Fire, Rock, Water",
        _imm:"None"
    },
    {
        _type:"Water",
        _super:"Fire, Ground, Rock",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Flying, Ghost, Ice, Normal, Poison, Psychic, Steel",
        _resists:"Dragon, Grass, Water",
        _imm:"None"
    },
    {
        _type:"Grass",
        _super:"Ground, Rock, Water",
        _neutral:"Dark, Electric, Fairy, Fighting, Ghost, Ice, Normal, Psychic",
        _resists:"Bug, Dragon, Fire, Flying, Grass, Poison, Steel",
        _imm:"None"
    },
    {
        _type:"Electric",
        _super:"Flying, Water",
        _neutral:"Bug, Dark, Fairy, Fighting, Fire, Ghost, Ice, Normal, Poison, Psychic, Rock, Steel",
        _resists:"Dragon, Electric, Grass",
        _imm:"Ground"
    },
    {
        _type:"Ice",
        _super:"Dragon, Flying, Grass, Ground",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Ghost, Normal, Poison, Psychic, Rock",
        _resists:"Fire, Ice, Steel, Water",
        _imm:"None"
    },
    {
        _type:"Fighting",
        _super:"Dark, Ice, Normal, Rock, Steel",
        _neutral:"Dragon, Electric, Fighting, Fire, Grass, Ground, Water",
        _resists:"Bug, Fairy, Flying, Poison, Psychic",
        _imm:"Ghost"
    },
    {
        _type:"Poison",
        _super:"Fairy, Grass",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ice, Normal, Psychic, Water",
        _resists:"Ghost, Ground, Poison, Rock",
        _imm:"Steel"
    },
    {
        _type:"Ground",
        _super:"Electric, Fire, Poison, Rock, Steel",
        _neutral:"Dark, Dragon, Fairy, Fighting, Ghost, Ground, Ice, Normal, Psychic, Water",
        _resists:"Bug, Grass",
        _imm:"Flying"
    },
    {
        _type:"Flying",
        _super:"Bug, Fighting, Grass",
        _neutral:"Dark, Dragon, Fairy, Fire, Flying, Ghost, Ground, Ice, Normal, Poison, Psychic, Water",
        _resists:"Electric, Rock, Steel",
        _imm:"None"
    },
    {
        _type:"Psychic",
        _super:"Fighting, Poison",
        _neutral:"Bug, Dragon, Electric, Fairy, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Rock, Water",
        _resists:"Psychic, Steel",
        _imm:"Dark"
    },
    {
        _type:"Bug",
        _super:"Dark, Grass, Psychic",
        _neutral:"Bug, Dragon, Electric, Ground, Ice, Normal, Rock, Water",
        _resists:"Fairy, Fighting, Fire, Flying, Ghost, Poison, Steel",
        _imm:"None"
    },
    {
        _type:"Rock",
        _super:"Bug, Fire, Flying, Ice",
        _neutral:"Dark, Dragon, Electric, Fairy, Ghost, Grass, Normal, Poison, Psychic, Rock, Water",
        _resists:"Fighting, Ground, Steel",
        _imm:"None"
    },
    {
        _type:"Ghost",
        _super:"Ghost, Psychic",
        _neutral:"Bug, Dragon, Electric, Fairy, Fighting, Fire, Flying, Grass, Ground, Ice, Poison, Rock, Steel, Water",
        _resists:"Dark",
        _imm:"Normal"
    },
    {
        _type:"Dark",
        _super:"Ghost, Psychic",
        _neutral:"Bug, Dragon, Electric, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"Dark, Fairy, Fighting",
        _imm:"None"
    },
    {
        _type:"Dragon",
        _super:"Dragon",
        _neutral:"Bug, Dark, Electric, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"Fairy"
    },
    {
        _type:"Steel",
        _super:"Fairy, Ice, Rock",
        _neutral:"Bug, Dark, Dragon, Fighting, Flying, Ghost, Grass, Ground, Normal, Poison, Psychic",
        _resists:"Electric, Fire, Steel, Water",
        _imm:"None"
    },
    {
        _type:"Fairy",
        _super:"Dark, Dragon, Fighting",
        _neutral:"Bug, Electric, Fairy, Flying, Ghost, Grass, Ground, Ice, Normal, Psychic, Rock, Water",
        _resists:"None",
        _imm:""
    },
    {
        _type:"Normal,Ice",
        _super:"Dragon, Flying, Grass, Ground",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Fire, Ghost, Ice, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Poison",
        _super:"Fairy, Grass",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ground, Ice, Normal, Poison, Psychic, Water",
        _resists:"Ghost, Rock, Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Bug",
        _super:"Dark, Grass, Psychic",
        _neutral:"Bug, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ground, Ice, Normal, Poison, Rock, Water",
        _resists:"Ghost, Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Rock",
        _super:"Bug, Fire, Flying, Ice",
        _neutral:"Dark, Dragon, Electric, Fairy, Fighting, Ghost, Grass, Ground, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Steel",
        _super:"Fairy, Ice, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ghost, Grass, Ground, Normal, Poison, Psychic, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Fire,Grass",
        _super:"Bug, Grass, Ground, Ice, Rock, Steel, Water",
        _neutral:"Dark, Electric, Fairy, Fighting, Flying, Ghost, Normal, Poison, Psychic",
        _resists:"Dragon, Fire",
        _imm:"None"
    },
    {
        _type:"Fire,Fairy",
        _super:"Bug, Dark, Dragon, Fighting, Grass, Ice, Steel",
        _neutral:"Electric, Fairy, Flying, Ghost, Ground, Normal, Poison, Psychic, Rock, Water",
        _resists:"Fire",
        _imm:"None"
    },
    {
        _type:"Electric,Fighting",
        _super:"Dark, Flying, Ice, Normal, Rock, Steel, Water",
        _neutral:"Bug, Dragon, Electric, Fairy, Fighting, Fire, Ghost, Grass, Ground, Poison, Psychic",
        _resists:"None",
        _imm:"None"
    },{
        _type:"Ice,Poison",
        _super:"Dragon, Fairy, Flying, Grass, Ground",
        _neutral:"Bug, Dark, Electric, Fighting, Fire, Ghost, Ice, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Fighting,Ground",
        _super:"Dark, Electric, Fire, Ice, Normal, Poison, Rock, Steel",
        _neutral:"Dragon, Fairy, Fighting, Ghost, Grass, Ground, Physic, Water",
        _resists:"Bug, Flying",
        _imm:"None"
    },
    {
        _type:"Fighting,Fairy",
        _super:"Dark, Dragon, Fighting, Ice, Normal, Rock, Steel",
        _neutral:"Bug, Electric, Fairy, Fire, Flying, Ghost, Grass, Ground, Psychic, Water",
        _resists:"Poison",
        _imm:"None"
    },
    {
        _type:"Poison,Steel",
        _super:"Fairy, Grass, Ice, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ghost, Ground, Normal, Poison, Psychic, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Ground,Fairy",
        _super:"Dark, Dragon, Electric, Fighting, Fire, Poison, Rock, Steel",
        _neutral:"Bug, Fairy, Flying, Ghost, Grass, Ground, Ice, Normal, Psychic, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Bug,Dragon",
        _super:"Dark, Dragon, Grass, Psychic",
        _neutral:"Bug, Electric, Fighting, Fire, Flying, Ghost, Ground, Ice, Normal, Poison, Rock, Water",
        _resists:"Fairy, Fighting",
        _imm:"None"
    },
    {
        _type:"Bug,Dark",
        _super:"Dark, Ghost, Grass, Psychic",
        _neutral:"Bug, Dragon, Electric, Fire, Flying, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"Fairy, Fighting",
        _imm:"None"
    },
    {
        _type:"Rock,Ghost",
        _super:"Bug, Fire, Flying, Ghost, Ice, Psychic",
        _neutral:"Dark, Dragon, Electric, Fairy, Fighting, Grass, Ground, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Normal,Grass",
        _super:"Ground, Rock, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ice, Normal, Poison, Psychic",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Water",
        _super:"Fire, Ground, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Flying, Ghost, Grass, Ice, Normal, Poison, Psychic, Steel, Water",
        _resists:"None",
        _imm:"None"
    },

    {
        _type:"Normal,Dragon",
        _super:"Dragon",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Normal,Ghost",
        _super:"Ghost, Psychic",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Fighting,Ice",
        _super:"Dark, Dragon, Flying, Grass, Ground, Ice, Normal, Rock, Steel",
        _neutral:"Bug, Electric, Fairy, Fighting, Fire, Ghost, Poison, Psychic,, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Fighting,Ghost", 
        _super:"Dark, Ghost, Ice, Normal, Psychic Rock, Steel",
        _neutral:"Bug, Dragon, Electric, Fairy, Fighting, Fire, Flying, Grass, Ground, Poison, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Poison,Fire",
        _super:"Bug, Fairy, Grass, Ice, Steel",
        _neutral:"Dark, Dragon, Electric, Fighting, Fire, Flying, Ghost, Ground, Normal, Poison, Psychic, Water",
        _resists:"Rock",
        _imm:"None"
    },
    {
        _type:"Poison,Flying",
        _super:"Bug, Fairy, Fighting, Grass",
        _neutral:"Dark, Dragon, Electric, Fire, Flying, Ghost, Ground, Ice, Normal, Poison, Psychic, Water",
        _resists:"Rock, Steel",
        _imm:"None"
    },
    {
        _type:"Poison,Ground",
        _super:"Electric, Fairy, Fire, Grass, Poison, Rock, Steel",
        _neutral:"Bug, Dark, Dragon, Fighting, Flying, Ghost, Ground, Ice, Normal, Psychic, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Poison,Fairy",
        _super:"Dark, Dragon, Fairy, Fighting, Grass",
        _neutral:"Bug, Electric, Fire, Flying, Ghost, Ground, Ice, Normal, Psychic, Rock, Water",
        _resists:"Poison, Steel",
        _imm:"None"
    },
    {
        _type:"Poison,Psychic",
        _super:"Fairy, Fighting, Grass, Poison",
        _neutral:"Bug, Dark, Dragon, Electric, Fire, Flying, Ghost, Ground, Ice, Normal, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Ground,Dark",
        _super:"Electric, Fire, Ghost, Poison, Rock, Steel",
        _neutral:"Bug, Dark, Dragon, Fairy, Fighting, Flying, Grass, Ground, Ice, Normal, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Ground,Electric",
        _super:"Electric, Fire, Flying, Poison, Rock, Steel, Water",
        _neutral:"Bug, Dark, Dragon, Fairy, Fighting, Ghost, Ground, Ice, Normal, Psychic",
        _resists:"Grass",
        _imm:"None"
    },
    {
        _type:"Ground,Psychic",
        _super:"Electric, Fighting, Fire, Poison, Rock, Steel",
        _neutral:"Bug, Dark, Dragon, Fairy, Flying, Ghost, Grass, Ground, Ice, Normal, Psychic, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Rock,Poison",
        _super:"Bug, Fairy, Fire, Flying, Grass, Ice",
        _neutral:"Dark, Dragon, Electric, Fighting, Ghost, Normal, Poison, Psychic, Rock, Water",
        _resists:"Ground, Steel",
        _imm:"None"
    },
    {
        _type:"Rock,Dark",
        _super:"Bug, Fire, Flying, Ghost, Ice, Psychic",
        _neutral:"Dark, Dragon, Electric, Fairy, Grass, Ground, Normal, Poison, Rock, Steel, Water",
        _resists:"Fighting",
        _imm:"None"
    },
    {
        _type:"Rock,Fighting",
        _super:"Bug, Dark, Fire, Flying, Ice, Normal, Rock, Steel",
        _neutral:"Dragon, Electric, Fairy, Fighting, Ghost, Grass, Ground, Poison, Psychic, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Rock,Electric",
        _super:"Bug, Fire, Flying, Ice, Water",
        _neutral:"Dark, Dragon, Electric, Fairy, Fighting, Ghost, Grass, Normal, Poison, Psychic, Rock, Steel",
        _resists:"Ground",
        _imm:"None"
    },
    {
        _type:"Rock,Grass",
        _super:"Bug, Fire, Flying, Ground, Ice, Rock, Water",
        _neutral:"Dark, Dragon, Electric, Fairy, Fighting, Ghost, Grass, Normal, Poison, Psychic, Rock, Steel",
        _resists:"Ground",
        _imm:"None"
    },
    {
        _type:"Rock,Dragon",
        _super:"Bug, Dragon, Fire, Flying, Ice",
        _neutral:"Dark, Electric, Fairy, Fighting, Ghost, Grass, Ground, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Bug,Ghost",
        _super:"Dark, Ghost, Grass, Psychic",
        _neutral:"Bug, Dragon, Electric, Fairy, Fighting, Fire, Flying Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Bug,Fairy",
        _super:"Dark, Dragon, Fighting, Grass, Psychic",
        _neutral:"Bug, Electric, Fairy, Flying, Ghost, Ground, Ice, Normal, Rock, Water",
        _resists:"Fire, Poison, Steel",
        _imm:"None"
    },
    {
        _type:"Bug,Psychic",
        _super:"Dark, Fighting, Grass, Poison, Psychic",
        _neutral:"Bug, Dragon, Electric, Fairy, Fire, Flying, Ghost, Ground, Ice, Normal, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Ghost,Poison",
        _super:"Fairy, Ghost, Grass, Psychic",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Ghost,Fairy",
        _super:"Dark, Dragon, Fighting, Ghost, Psychic",
        _neutral:"Bug, Electric, Fairy, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Fire,Normal",
        _super:"Bug, Grass, Ice, Steel",
        _neutral:"Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ghost, Ground, Normal, Poison, Psychic, Water",
        _resists:"Rock",
        _imm:"None"
    },
    {
        _type:"Fire,Water",
        _super:"Bug, Fire, Grass, Ground, Ice, Rock, Steel",
        _neutral:"Dark, Electric, Fairy, Fighting, Flying, Ghost, Normal, Poison, Psychic",
        _resists:"Dragon, Water",
        _imm:"None"
    },
    {
        _type:"Fire,Steel",
        _super:"Bug, Fairy, Grass, Ice, Rock, Steel",
        _neutral:"Dark, Dragon, Electric, Fighting, Flying, Ghost, Ground, Normal, Poison, Psychic",
        _resists:"Fire, Water",
        _imm:"None"
    },
    {
        _type:"Fire,Ice",
        _super:"Bug, Dragon, Flying, Grass, Ground, Ice, Steel",
        _neutral:"Dark, Electric, Fairy, Fighting, Ghost, Normal, Poison, Psychic, Rock",
        _resists:"Fire, Water",
        _imm:""
    },
    {
        _type:"Water,Grass",
        _super:"Fire, Ground, Rock, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Flying, Ghost, Grass, Normal, Poison, Pyschic, Steel",
        _resists:"Water",
        _imm:"None"
    },
    {
        _type:"Water,Steel",
        _super:"Fairy, Fire, Ground, Ice, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Flying, Ghost, Grass, Normal, Poison, Steel",
        _resists:"Water",
        _imm:"None"
    },
    {
        _type:"Grass,Ice",
        _super:"Dragon, Flying, Grass, Ground, Rock, Water",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Ghost, Ice, Normal, Poison, Psychic",
        _resists:"Fire, Steel",
        _imm:"None"
    },
    {
        _type:"Grass,Ground",
        _super:"Electric, Fire, Ground, Poison, Rock, Steel, Water",
        _neutral:"Dark, Dragon, Fairy, Fighting, Ghost, Ice, Normal, Psychic",
        _resists:"Bug, Flying, Grass",
        _imm:"None"
    },
    {
        _type:"Electric,Normal",
        _super:"Flying, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Electric,Ghost",
        _super:"Flying, Ghost, Psychic, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Grass, Ground, Ice, Normal, Poison, Rock, Steel",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Electric,Fire",
        _super:"Bug, Flying, Grass, Ice, Steel, Water",
        _neutral:"Dark, Electric, Fairy, Fighting, Fire, Ghost, Ground, Normal, Psychic, Rock",
        _resists:"Dragon",
        _imm:"None"
    },
    {
        _type:"Electric,Psychic",
        _super:"Fighting, Flying, Poison, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fire, Ghost, Grass, Ground, Ice, Normal, Psychic, Rock, Steel",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Electric,Dark",
        _super:"Flying, Ghost, Pyschic, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Grass, Ground, Ice, Normal, Poison, Rock, Steel",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Electric,Poison",
        _super:"Fairy, Flying, Grass, Water",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Ghost, Ice, Normal, Poison, Psychic, Rock, Steel",
        _resists:"Ground",
        _imm:"None"
    },
    {
        _type:"Ice,Fairy",
        _super:"Dark, Dragon, Fighting, Flying, Grass, Ground",
        _neutral:"Bug, Electric, Fairy, Ghost, Ice, Normal, Poison, Rock, Water",
        _resists:"Fire, Steel",
        _imm:"None"
    },
    {
        _type:"Ice,Steel",
        _super:"Dragon, Fairy, Flying, Grass, Ground, Ice, Rock",
        _neutral:"Bug, Dark, Electric, Fighting, Ghost, Normal, Poison, Psychic",
        _resists:"Fire, Steel, Water",
        _imm:"None"
    },
    {
        _type:"Ice,Ground",
        _super:"Dragon, Electric, Fire, Flying, Grass, Ground, Poison, Rock, Steel",
        _neutral:"Bug, Dark, Fairy, Fighting, Ghost, Ice, Normal, Psychic, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Ice,Ghost",
        _super:"Dragon, Flying, Ghost,Grass, Ground, Psychic",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Fire, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },
    {
        _type:"Ice,Bug",
        _super:"Dark, Dragon, Flying, Grass, Ground, Psychic",
        _neutral:"Bug, Electric, Fairy, Fighting, Ghost, Ice, Normal, Poison, Rock, Water",
        _resists:"Fire, Steel",
        _imm:"None"
    },
    {
        _type:"Dragon,Ice",
        _super:"Dragon, Flying, Grass, Ground",
        _neutral:"Bug, Dark,Electric, Fairy, Fighting, Fire, Ghost, Ice, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },{
        _type:"Dragon,Fairy",
        _super:"Dark, Dragon, Fighting",
        _neutral:"Bug, Electric, Fairy, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Water",
        _resists:"Steel",
        _imm:"None"
    },{
        _type:"Dragon,Fighting",
        _super:"Dark, Dragon, Ice, Normal, Rock, Steel",
        _neutral:"Bug, Electric, Fighting, Fire, Flying, Ghost, Grass, Ground, Poison, Psychic, Water",
        _resists:"Fairy",
        _imm:"None"
    },
    {
        _type:"Dark,Ice",
        _super:"Dragon, Flying, Ghost, Grass, Ground, Psychic",
        _neutral:"Bug, Dark, Electric, Fairy, Fighting, Fire, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },{
        _type:"Dark,Steel",
        _super:"Fairy, Ghost, Ice, Psychic, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Grass, Ground, Normal, Poison, Steel, Water",
        _resists:"None",
        _imm:"None"
    },{
        _type:"Dark,Fairy",
        _super:"Dark, Dragon, Fighting, Ghost, Psychic",
        _neutral:"Bug, Electric, Fairy, Fire, Flying, Grass, Ground, Ice, Normal, Poison, Rock, Steel, Water",
        _resists:"None",
        _imm:"None"
    },{
        _type:"Steel,Ghost",
        _super:"Fairy, Ghost, Ice, Psychic, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Grass, Ground, Normal, Poison, Steel, Water",
        _resists:"None",
        _imm:"None"
    },{
        _type:"Steel,Normal",
        _super:"Fairy, Ice, Rock",
        _neutral:"Bug, Dark, Dragon, Electric, Fighting, Fire, Flying, Ghost, Grass, Ground, Normal, Poison, Psychic, Water",
        _resists:"Steel",
        _imm:"None"
    },
    {
        _type:"Steel,Bug",
        _super:"Dark, Fairy, Grass, Ice, Psychic, Rock",
        _neutral:"Bug, Dragon, Electric, Fighting, Flying, Ghost, Ground, Normal, Poison, Water",
        _resists:"Fire, Steel",
        _imm:"None"
    },     
];
module.exports= cover;

/* {
    _type:"",
    _super:"",
    _neutral:"",
    _resists:"",
    _imm:""
}, */
//ok when it says coverage type for normal, bug does that mean that, that is the pokemon you are using?? yes
//it shows the types normal / bug can hit for super effective, neutral, resisted or immune damage
