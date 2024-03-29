const { Song } = require('../models');

module.exports= {
    
    async index(req, res){
        try{
        
           const songs = await Song.findAll({
            limit: 10
           });
           res.send(songs); 
        } catch(err){
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
                
            })
        }
    },
    async post(req, res){
        try{
           const song =  await Song.create(req.body);
           res.send(song.toJSON()); 
        } catch(err){
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to create the song'
                
            })
        }
    },
    async show(req, res){
        try{
           const song = await Song.findByPk(req.params.songId);
           res.send(song); 
        } catch(err){
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to fetch the songs'
                
            })
        }
    },
    async delete(req, res){
        try{
           const song = await Song.findByPk(req.params.songId);
           await song.destroy();
           res.send(song); 
        } catch(err){
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to delete the song'
                
            })
        }
    },
    async edit(req, res){
        try{
           const song = await Song.update(req.body,{
               where: {
                   id: req.params.songId
               }
           });
           res.send(song); 
        } catch(err){
            console.log(err);
            res.status(500).send({
                error: 'An error has occured trying to update the song'
                
            })
        }
    }
}